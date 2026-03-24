export const prerender = true;

export async function GET() {
  const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Elicio Duch
ORG:Pacto Inmobiliario
TEL;TYPE=CELL:+529931779143
EMAIL:elicio@pacto.mx
URL:https://pacto.mx
END:VCARD`;

  return new Response(vcard, {
    headers: {
      "Content-Type": "text/vcard",
      "Content-Disposition": 'attachment; filename="elicio.vcf"',
    },
  });
}
