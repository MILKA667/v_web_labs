const productsState = {};
const productsProxy = new Proxy(productsState, {
  set(target, productId, value) {
    target[productId] = value;
    updateProductButton(productId, value);
    return true;
  }
});

document.querySelectorAll('.myButton').forEach(button => {
  const productId = button.dataset.product;
  if (!productsProxy[productId]) {
    productsProxy[productId] = {
      clicked: false
    };
  }
  updateProductButton(productId, productsProxy[productId]);
});

document.querySelectorAll('.myButton').forEach(button => {
  button.addEventListener('click', function() {
    const productId = this.dataset.product;
    const currentState = productsProxy[productId];
    
    productsProxy[productId] = {
      ...currentState,
      clicked: true
    };
    
    setTimeout(() => {
      productsProxy[productId] = {
        ...currentState,
        clicked: false
      };
    }, 2000);
  });
});

function updateProductButton(productId, state) {
  const button = document.querySelector(`[data-product="${productId}"]`);
  if (!button) return;
  
  if (state.clicked) {
    button.innerHTML = "Добавлено в корзину!";
    button.disabled = true;
  } else {
    button.innerHTML = "В корзину";
    button.disabled = false;
  }
}