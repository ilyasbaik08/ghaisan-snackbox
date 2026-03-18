let cart = []

const prices = {
"Kastengel":60000,
"Nastar Classic":55000,
"Coklat Karakter":47000,
"Sagu Keju":45000,
"Snowball Cheese":45000,
"Palm Sugar Cheese":40000,
"Lidah Kucing":37000,
"Semprit Jadul":35000,
"Peanut Cookies":35000
}

function addToCart(namaProduk){
    cart.push(namaProduk)
    renderCart()
    openCart()
}

function renderCart(){
    let list = document.getElementById("cartItems")
    let total = 0
    list.innerHTML = ""

    cart.forEach((item,i)=>{
        total += prices[item]

        list.innerHTML += `
        <div class="flex justify-between bg-cream p-2 rounded-lg">
            <div>
                <p class="font-semibold">${item}</p>
                <p class="text-sm text-gray-500">Rp ${prices[item].toLocaleString()}</p>
            </div>
            <button onclick="removeItem(${i})">❌</button>
        </div>
        `
    })

    document.getElementById("totalHarga").innerText =
        "Total : Rp " + total.toLocaleString()
}

function removeItem(i){
    cart.splice(i,1)
    renderCart()
}

function openCart(){
    document.getElementById("cartPanel").classList.remove("translate-x-full")
}

function closeCart(){
    document.getElementById("cartPanel").classList.add("translate-x-full")
}

function checkoutWA(){

    let nama = document.getElementById("nama").value
    let hp = document.getElementById("hp").value
    let alamat = document.getElementById("alamat").value
    let payment = document.querySelector('input[name="payment"]:checked')

    if(cart.length === 0){
        alert("Keranjang kosong")
        return
    }

    if(nama === "" || hp === "" || alamat === ""){
        alert("Lengkapi data dulu")
        return
    }

    if(!payment){
        alert("Pilih metode pembayaran")
        return
    }

    let total = 0
    let text = "Halo Admin Ghaisan Snackbox 👋%0A%0A"
    text += "Saya ingin order:%0A"

    cart.forEach(item=>{
        total += prices[item]
        text += `• ${item} - Rp ${prices[item].toLocaleString()}%0A`
    })

    text += `%0A💰 Total Transfer: Rp ${total.toLocaleString()}`
    text += `%0A🏦 Metode Bayar: Transfer ${payment.value}`
    text += `%0A%0A📌 Setelah transfer saya akan kirim bukti pembayaran ya.`

    text += `%0A%0A👤 Nama: ${nama}`
    text += `%0A📱 No HP: ${hp}`
    text += `%0A📍 Alamat: ${alamat}`

    window.open(`https://wa.me/6282232984491?text=${text}`)
}