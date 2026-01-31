// tests/transliteration.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Singlish to Sinhala/Tamil Transliteration Application', () => {
  test.setTimeout(10000);

  // ==================== POSITIVE FUNCTIONAL TEST CASES (24) ====================

  test('Pos_Fun_0001: Simple present tense statement', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'mama vathura bonavaa';
    const expectedOutput = 'මම වතුර බොනවා';
    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput?.trim()).toContain(expectedOutput);
  });

  test('Pos_Fun_0002: Compound sentence with conjunction', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'mama gedhara yanavaa, namuth magee vahanaya kaedilaa';
    const expectedOutput = 'මම ගෙදර යනවා, නමුත් මගේ වහනය කැඩිලා';
    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput?.trim()).toContain(expectedOutput);
  });

  test('Pos_Fun_0003: Complex conditional sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'oyaa enavanam enna.mama thaama innavaa';
    const expectedOutput = 'ඔයා එනවනම් එන්න.මම තාම ඉන්නවා';
    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput?.trim()).toContain(expectedOutput);
  });

  test('Pos_Fun_0004: Question with time reference', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'meeh 8.00 yi velaava. oyaa  dhaen enavadha?';
    const expectedOutput = 'මේහ් 8.00 යි වෙලාව. ඔයා  දැන් එනවද?';
    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput?.trim()).toContain(expectedOutput);
  });

  test('Pos_Fun_0005: Polite imperative request', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'karuNaakaralaa vaahanaya issarahata ganna';
    const expectedOutput = 'කරුණාකරලා වාහනය ඉස්සරහට ගන්න';
    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput?.trim()).toContain(expectedOutput);
  });

  test('Pos_Fun_0006: Negative future statement', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'mama heta ennee naehae';
    const expectedOutput = 'මම හෙට එන්නේ නැහැ';
    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput?.trim()).toContain(expectedOutput);
  });

  test('Pos_Fun_0007: Formal greeting with time', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'suba udhaeesanak! oyaata kohomadha?';
    const expectedOutput = 'සුබ උදෑසනක්! ඔයාට කොහොමද?';
    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput?.trim()).toContain(expectedOutput);
  });

  test('Pos_Fun_0008: Informal slang greeting', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'ela machan! ubata kohomadha?';
    const expectedOutput = 'එල මචන්! උබට කොහොමද?';
    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput?.trim()).toContain(expectedOutput);
  });

  test('Pos_Fun_0009: Cooking instructions', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'first onions kotu karanavaa, then tomatoes ekathu karanavaa, finally masaala tika kalavam karanavaa';
    const expectedOutput = 'first onions කොටු කරනවා, then tomatoes එකතු කරනවා, finally මසාල ටික කලවම් කරනවා';
    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput?.trim()).toContain(expectedOutput);
  });

  test('Pos_Fun_0010: Daily weather conversation', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'vassa vedivenavaa, umbrella eka aragena  yanna';
    const expectedOutput = 'වස්ස වෙඩිවෙනවා, umbrella එක අරගෙන  යන්න';
    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput?.trim()).toContain(expectedOutput);
  });

  test('Pos_Fun_0011: Future travel plans', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'next month mama Dubai yanna plan karanavaa, visaa apply karannayi, flight book karanna thiyenavaa';
    const expectedOutput = 'next month මම Dubai යන්න plan කරනවා, විසා apply කරන්නයි, flight book කරන්න තියෙනවා';
    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput?.trim()).toContain(expectedOutput);
  });

  test('Pos_Fun_0013: Office meeting reminder', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'tomorrow 10am  team meeting ekak thiyenavaa, all reports prepare karalaa enna';
    const expectedOutput = 'tomorrow 10am  team meeting එකක් තියෙනවා, all reports prepare කරලා එන්න';
    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput?.trim()).toContain(expectedOutput);
  });

  test('Pos_Fun_0015: Family relationship description', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'magee nangi Japan yanavaa, malli university yanavaa';
    const expectedOutput = 'මගේ නන්ගි Japan යනවා, මල්ලි university යනවා';
    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput?.trim()).toContain(expectedOutput);
  });

  test('Pos_Fun_0016: Technical support request', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'computer problem ekak thiyenavaa, help karanna puLuvandha?';
    const expectedOutput = 'computer problem එකක් තියෙනවා, help කරන්න පුළුවන්ද?';
    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput?.trim()).toContain(expectedOutput);
  });

  test('Pos_Fun_0017: Holiday greetings', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'Suba Aluth Avurudhdhak! nava vasaree suba pathum';
    const expectedOutput = 'සුබ අලුත් අවුරුද්දක්! නව වසරේ සුබ පතුම්';
    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput?.trim()).toContain(expectedOutput);
  });

  test('Pos_Fun_0019: Paragraph style long input', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'dhitvaa suLi kuNaatuva samaGa aethi vuu gQQvathura saha naayayaeem heethuven maarga sQQvarDhana aDhikaariya sathu maarga kotas 430k vinaashayata pathva aethi athara, ehi samastha dhiga pramaaNaya kiloomiitar 300k pamaNa vana bava pravaahana,mahaamaarga saha naagarika sQQvarDhana amaathYA bimal rathnaayaka saDHahan kaLeeya.';
    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 8000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput).toContain('සුළි කුණාටුව');
    expect(actualOutput).toContain('ගංවතුර');
    expect(actualOutput).toContain('මාර්ග');
  });

  test('Pos_Fun_0020: Colloquial slang phrase', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'adoo, eka poddak amaaruyi vagee!';
    const expectedOutput = 'අඩෝ, එක පොඩ්ඩක් අමාරුයි වගේ!';
    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput?.trim()).toContain(expectedOutput);
  });

  test('Pos_Fun_0021: Units of measurement', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'mata water 500ml, sugar 1kg oonee';
    const expectedOutput = 'මට water 500ml, sugar 1kg ඕනේ';
    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput?.trim()).toContain(expectedOutput);
  });

  test('Pos_Fun_0022: Line break input', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'mama gedhara yanavaa. oyaa enavadha?';
    const expectedOutput = 'මම ගෙදර යනවා. ඔයා එනවද?';
    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput?.trim()).toContain(expectedOutput);
  });

  test('Pos_Fun_0024: Repeated words for emphasis', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'hari hari, ehema karapan';
    const expectedOutput = 'හරි හරි, එහෙම කරපන්';
    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput?.trim()).toContain(expectedOutput);
  });

  test('Pos_Fun_Additional1: Simple greeting', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'aayuboovan!';
    const expectedOutput = 'ආයුබෝවන්!';
    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput?.trim()).toContain(expectedOutput);
  });

  test('Pos_Fun_Additional2: Request with politeness', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'mata udhavvak karanna puLuvandha?';
    const expectedOutput = 'මට උදව්වක් කරන්න පුළුවන්ද?';
    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput?.trim()).toContain(expectedOutput);
  });

  test('Pos_Fun_Additional3: Past tense statement', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'mama iiyee gedhara giyaa';
    const expectedOutput = 'මම ඊයේ ගෙදර ගියා';
    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput?.trim()).toContain(expectedOutput);
  });

  // ==================== NEGATIVE FUNCTIONAL TEST CASES (10) ====================

  test('Neg_Fun_0001: Chat shorthand not converted', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'mata help ekak karanna puLuvanda? thx!';
    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput?.trim()).toContain('thx!');
  });

  test('Neg_Fun_0002: Mixed case input confusion', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'Mama GEDARA yannavaa';
    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput).toContain('GEDHARA');
  });

  test('Neg_Fun_0003: Unsupported English abbreviation', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'C U L8R machan';
    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput?.trim()).toContain('C U L8R');
  });

  test('Neg_Fun_0004: Rare English loanword error', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'bluetooth connect karanna';
    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput).not.toContain('බ්ලු');
  });

  test('Neg_Fun_0005: Compound word segmentation failure', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'emailkaranna';
    const expectedIncorrectOutput = 'ඊමයිල්කරන්න';
    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput).toBe(expectedIncorrectOutput);
  });

  test('Neg_Fun_0006: English acronym segmentation issue', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'PDFeka upload karanaaa';
    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput).toContain('ඵ්ඪ්ෆෙක');
  });

  test('Neg_Fun_0007: Special character breaks conversion', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'mama@gedhara yanavaa';
    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput).toContain('@');
  });

  test('Neg_Fun_0008: Multiple negation markers confusion', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'mata eeka karanna baerei naehaea';
    const expectedIncorrectOutput = 'මට එක කරන්න බැරේ නැහැ';
    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput).toBe(expectedIncorrectOutput);
  });

  test('Neg_Fun_0009: Price negotiation confusion', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'Rs.500 da? last price eka 450 .adu karanna barida?';
    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput).toContain('ඩ?');
    expect(actualOutput).toContain('බරිඩ?');
  });

  test('Neg_Fun_00010: Voice command style with heavy slang', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'adoo machan adha hari lassan dawasak vageeee, namuth mata mokakda hari awulak wagee hithenavaa';
    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput).toContain('ඩw');
  });

  // ==================== POSITIVE UI TEST CASE (1) ====================

  test('Pos_UI_0001: Clear button functionality', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill('mama yanavaa');
    await page.waitForTimeout(500);
    const clearButton = page.locator('button:has-text("Clear")');
    await clearButton.click();
    await page.waitForTimeout(500);
    const inputText = await inputField.inputValue();
    expect(inputText).toBe('');
    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    const outputText = await outputField.textContent();
    expect(outputText?.trim()).toBe('');
  });
});