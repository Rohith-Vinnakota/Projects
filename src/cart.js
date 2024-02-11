var cartItems=document.getElementById("cartitems");
async function addcart(id) {
    const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id;
    console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    let content;
    content = data.meals;

    cartItems.style.display = 'grid';
        content.map((each) => {
            const { strMeal, strMealThumb, idMeal } = each;
            cartItems.innerHTML += cartItems.innerHTML = ` <li class='w-11/12 m-auto  rounded-xl shadow-2xl'>
            <div class='itemcard  rounded-xl overflow-hidden'>
                        <div class='items flex flex-col'>
                            <img src=${strMealThumb} alt=${strMeal} class='h-40 object-cover sm:object-cover' loading='lazy' >
                            <div class='itemcontent flex flex-col my-4 pl-2'>
                                <p class='foodname text-orange-500 line-clamp-1'>${strMeal}</p>
                                <p class='foodprice text-gray-600'>${idMeal}</p>
                                <button class='bg-orange-600 text-white w-32 py-1 rounded-lg cursor-pointer self-center' onclick='addcart(${idMeal})' type='button'>Add Cart</button>
                            </div>
                        </div>

                    </div>
                </li>`;
        });
    
}
