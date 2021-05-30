# verynerd-product-website-v2
The Very Nerdy Clothing Company site is a front-end example of a pre-order merchandise website. It utilizes HTML, CSS/SCSS, JavaScript, the React library, and the Bootstrap framework.

To Do:

- Third Row of Products?
- Product Modal
    - Add tab navigation for sizing?
- Aria accessability
- Cart / Checkout Pages
    - Mock Checkout Page
- Refactor / Organization of Components and CSS
            


Notes:

- Use State to share cart data between ShoppingCart and ProductSection components by passing them a function that modifies a parents setState method
    - This method would only setState to change the object for items added to the cart from the ProductModal, which would then rerender the ShoppingCart to include the updated state


Completed:

- Create and populate secondary pages, and any components required (5/22)
    - FAQ accordians
    - Sizing Chart Tables
- Newsletter Modal (5/22)
- Cart / Checkout Pages
    - Cart / Badge Navigation (5/23)
    - Setup Cart Context (5/23)
- Newsletter Modal: Email Validation (5/25)
- Cart / Checkout Pages
    - Create Cart Page
        - Layout (5/27)
        - Animate in and Out based on cart button (5/27)
        - AddItems (5/27)
        - Footer (5/28)
            - Style (5/28)
            - Checkout Button (5/28)
        - Items (5/28)
            - Style (5/28)
            - Add Remove and Increment / Decrement quantity functionality (5/28)
            - Adjust text at smaller screen sizes (5/29)
        - Use consistent X for close button (5/28)
- Product Card (5/29)
    - Remove social share buttons (5/29)
    - Size button and add "Add to Cart" text on all but smallest of screens (5/29)