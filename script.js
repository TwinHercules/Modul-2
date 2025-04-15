let popup = document.getElementById("popup");

function openPop() {
    popup.classList.add("open-popup");
}

function closePop() {
    popup.classList.remove("open-popup");
}

<div class="card">
<img src="img/seafood-1.jfif" alt="makanan">
<div class="desk-menu">
    <h3>Seafood Gurita</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sunt sequi veniam.</p>
    <p class="harga">Rp. 12.000</p>
    <a href="#" onclick="openPop()">Buy</a>
    <div class="popUp" id="popup">
        <h2>Thanks For Order!</h2>
        <a href="#" onclick="closePop()">Kembali</a>
    </div>
</div>
</div>