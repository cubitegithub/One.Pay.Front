export function formatoDolar(valor) {
    if (isNaN(valor)) return "$ 0.00";

    return "$ " + Number(valor).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}