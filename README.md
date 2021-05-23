# verynerd-product-website-v2
The Very Nerdy Clothing Company site is a front-end example of a pre-order merchandise website. It utilizes HTML, CSS/SCSS, JavaScript, the React library, and the Bootstrap framework.

To Do:

- Newsletter Modal: Email Validation
- Product Card
    - Remove social share buttons
    - Size button and add "Add to Cart" text on all but smallest of screens
- Product Modal
    - Add tab navigation for sizing?
- Aria accessability
- Cart / Checkout Pages


Notes:

- Use State to share cart data between ShoppingCart and ProductSection components by passing them a function that modifies a parents setState method
    - This method would only setState to change the object for items added to the cart from the ProductModal, which would then rerender the ShoppingCart to include the updated state


Completed:

- Create and populate secondary pages, and any components required (5/22)
    - FAQ accordians
    - Sizing Chart Tables
- Newsletter Modal (5/22)