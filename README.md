# Buy-Buddy E-commerce App

Buy-Buddy is a simple React application that allows users to browse and purchase products from our online store. The application includes a navbar, a home page, a product list page, a product detail page, and a shopping cart page.

### Getting Started

To get started with Buy-Buddy, you will need to have Node.js and NPM installed on your computer. Once you have those installed, follow these steps:

1. Clone the repository to your local machine: git clone "https://github.com/example/buy-buddy.git"
2. Navigate to the project directory: cd buy-buddy
3. Install the necessary dependencies: npm install
4. Start the development server: npm start
5. Open your web browser and go to "http://localhost:3000"


### Features

- This is an e-commerce website called Buy budy. 
- Where You can log in or log out.
- You can also subscribe to our newsletters.
- You can see the homepage then when clicking the Find products, you can see a list of the products.here you can search on products and also sort the products by price.
- The products are displayed with their details, you can add a product to cart by clicking on the add to cart. When you click on add to cart, it increases the counts to the number of adds you have.
- You can see all yhe products you’ve added to the carts.
- You can also remove the products from the cart, and the count on the product will decrease. When the the count is less 1 the product is deleted from the cart.
- On the bottom of the cart, you can see a checkout button that when you click, it shows a modal.
- This modal shows the list of All the products on the checkout that you want to pay for. So you can proceed to pay, or you can close the checkout.

## Components

### App

The App component is the top-level component that renders the other components. It uses the BrowserRouter component from the react-router-dom library to enable client-side routing.

### Navbar

The Navbar component is a simple navigation bar that displays links to the home page, the product list page, and the shopping cart page. It uses the Link component from the react-router-dom library to enable client-side navigation.

### Home

The Home component is the home page of the application. It displays a welcome message and an invitation to start shopping.

### ProductList

The ProductList component is the product list page of the application. It fetches a list of products from the fake store API and displays them as links to the product detail page.

### Product

The Product component is the product detail page of the application. It fetches the details of a product from the fake store API based on the product ID in the URL and displays them.

### ShoppingCart

The ShoppingCart component is the shopping cart page of the application. It displays a list of products that have been added to the cart, which are stored in the CartContext using the useContext hook.

## Contexts

### CartContext

The CartContext is a simple context that stores the products that have been added to the shopping cart. It is used by the ShoppingCart component to display the contents of the cart.

### Dependencies

Buy-Buddy uses the following dependencies:

- React: a JavaScript library for building user interfaces.
- React Router: a collection of navigational components for React.
- React Context API: a way to pass data through the component tree without having to pass props down manually at every level.
- Fetch API: a modern, Promise-based JavaScript API for making network requests.
- CSS Modules: a CSS file in which all class names and animation names are scoped locally by default.
- prop-types: attributes that pass data from the parent element to a child element.

### Contributing

- Valentine Kerubo.
- Sandra Nyamwea.
- Gideon Mutugi.
- Dennis Mutuma Marangu.

## License

- Buy-Buddy is licensed under the MIT License.