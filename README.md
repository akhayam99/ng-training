# Progressive Exercises for Angular Training

## Create a Component and Add it to the Routing

1.  Generate a new component using the Angular CLI command: `ng generate component component-name`
2.  Add the component to the sidebar navigation.
3.  Add the new component to the routing in `app-routing.module.ts`.

## Define the Backend Endpoint in the Environment File

1.  Add the backend endpoint URL to `environment.ts` as follows:

typescriptCopy code

`export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api' // Replace with the correct endpoint
};`

2.  Use `environment.apiUrl` in your service to define the backend endpoint.

## Define the Data Type Interface

1.  Create an interface to define the data type received from the backend.
2.  Use this interface in your services and components to type the data.

## Create the Service and Perform a GET Request

1.  Generate a new service using the Angular CLI command: `ng generate service service-name`.
2.  Implement a `get()` function in the service to make a GET request to the backend and retrieve data.

## Display the List Result in a Component

1.  Use the `get()` function of the service to retrieve data from the backend.
2.  Display the data in your component using `*ngFor`.

## Separate Components into List and Detail

1.  Create two separate components: one for the list and one for the detail.
2.  Use the list component to display a list of items and the detail component to display details of a selected item.

## Create and Use the Delete Call

1.  Add a `delete(id)` function to your service to make a DELETE request to the backend.
2.  Use this function in your component to allow users to delete an item.

## Implement the Delete Call

1.  In the child component (e.g., detail component), implement a function to delete the item and send an output to the parent component.
2.  In the parent component (e.g., list component), handle the output received from the child component and update the list of displayed items accordingly.

## Create a Form and Execute a POST

1.  Create a form in your component to collect data to send to the backend.
2.  Implement a `submit(data)` function in your component to handle sending the form data.
3.  Utilize the previously created service to make a POST request to the backend, passing the data collected from the form.
4.  Handle the response of the POST request in your component.

## Performance Optimization

1.  Implement performance optimization techniques such as lazy loading, code splitting, and preloading to improve the loading speed and efficiency of your Angular application.
