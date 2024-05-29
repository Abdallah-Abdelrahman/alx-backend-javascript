export default function guardrail(mathFunction) {
  const queue = ['Guardrail was processed'];

  try {
    queue.unshift(mathFunction());
    return (queue);
  } catch (err) {
    queue.unshift(`Error: ${err.message}`);
    return (queue);
  }
}
