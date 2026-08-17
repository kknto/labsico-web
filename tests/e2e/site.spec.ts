import { expect, test } from "@playwright/test";

test("home renders without horizontal overflow and main navigation works", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "LABSICO" })).toBeVisible();

  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  expect(overflow).toBe(false);

  if (page.viewportSize()?.width && page.viewportSize()!.width > 900) {
    await page.getByRole("link", { name: "Servicios" }).first().click();
    await expect(page).toHaveURL(/\/servicios/);
  }
});

test("mobile menu opens and closes", async ({ page, isMobile }) => {
  test.skip(!isMobile, "mobile-only behavior");
  await page.goto("/");
  await page.getByRole("button", { name: "Abrir menu" }).click();
  await expect(page.getByRole("navigation", { name: "Navegacion movil" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("button", { name: "Abrir menu" })).toBeVisible();
});

test("services search opens modal and closes with Escape", async ({ page }) => {
  await page.goto("/servicios");
  await page.getByPlaceholder("Ej. revenimiento, ASTM C39").fill("concreto");
  await expect(page.getByRole("button", { name: /Ver ficha/ }).first()).toBeVisible();
  await page.getByRole("button", { name: /Ver ficha/ }).first().click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toBeHidden();
});

test("category routes, sitemap and robots respond", async ({ page }) => {
  await page.goto("/servicios/concretos");
  await expect(page.getByRole("heading", { name: "Concretos", exact: true }).first()).toBeVisible();
  await expect(page.getByRole("navigation", { name: "Ruta de navegacion" })).toBeVisible();

  const sitemap = await page.request.get("/sitemap.xml");
  expect(sitemap.ok()).toBe(true);
  const robots = await page.request.get("/robots.txt");
  expect(robots.ok()).toBe(true);
});

test("quote API prepares WhatsApp and server email status", async ({ request }) => {
  const response = await request.post("/api/quote-link", {
    data: {
      name: "Cliente Prueba",
      phone: "9980000000",
      email: "cliente@example.com",
      company: "Constructora",
      project: "Obra de prueba",
      jobLocation: "Cancun",
      targetDate: "2026-08-20",
      sampleCount: "3 cilindros",
      service: "Revenimiento",
      comments: "Solicitud de prueba",
      startedAt: String(Date.now() - 3000)
    }
  });

  expect(response.ok()).toBe(true);
  const body = (await response.json()) as { url?: string; email?: { sent: boolean } };
  expect(body.url).toContain("https://wa.me/");
  expect(typeof body.email?.sent).toBe("boolean");
});
