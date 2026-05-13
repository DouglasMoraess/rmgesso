export function buildWhatsAppUrl(
  phone: string,
  fields: { name?: string; phone?: string; service?: string; message?: string },
  intro: string
) {
  let text = intro;
  if (fields.name)    text += `\n\n*Nome:* ${fields.name}`;
  if (fields.phone)   text += `\n*Telefone:* ${fields.phone}`;
  if (fields.service) text += `\n*Serviço:* ${fields.service}`;
  if (fields.message) text += `\n*Mensagem:* ${fields.message}`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
