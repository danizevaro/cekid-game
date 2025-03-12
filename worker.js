export default {
    async fetch(request) {
        // URL API
        const url = "https://a-api.yoggstore.id/v3/user/orderConfirmGuest";

        // Data request
        const params = new URLSearchParams({
            layanan: "PUBGM30",
            metode: "17",
            id: "539252695",
            kontak: "05243561698",
            api_key: "undefined"
        });

        // Header request
        const headers = {
            "XGORGON": "90b33a73ee1dc1feee3374864835f063f9b2e18cadf93720a78d1eaf2f62cdc9",
            "Content-Type": "application/x-www-form-urlencoded",
            "Client-Timezone": "2025-03-12"
        };

        try {
            // Melakukan request ke API
            const response = await fetch(url, {
                method: "POST",
                headers: headers,
                body: params.toString()
            });

            // Mendapatkan data JSON dari response
            const result = await response.json();

            // Mengembalikan response dengan JSON hasil request
            return new Response(JSON.stringify(result, null, 2), {
                headers: { "Content-Type": "application/json" }
            });
        } catch (error) {
            // Menangani error jika request gagal
            return new Response(JSON.stringify({ error: error.message }), {
                headers: { "Content-Type": "application/json" },
                status: 500
            });
        }
    }
};
