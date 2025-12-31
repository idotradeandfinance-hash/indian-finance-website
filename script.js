window.onload = function () {

    function updateNifty() {
        fetch("/.netlify/functions/nifty")
            .then(res => res.json())
            .then(data => {
                if (!data.price) {
                    document.getElementById("nifty-price").innerText = "Data unavailable";
                    return;
                }

                document.getElementById("nifty-price").innerText = `₹ ${data.price}`;
                document.getElementById("nifty-change").innerText = "Delayed live data";
            })
            .catch(() => {
                document.getElementById("nifty-price").innerText = "Error loading data";
            });
    }

    updateNifty();
    setInterval(updateNifty, 120000); // refresh every 2 minutes
};
