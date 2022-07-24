# Pre-build plan

The project was created as a react application.

My initial through process was to create the map, filter and table features as separate reusable components along with the function to fetch data from the api.
This helps keep the code clean and readable. When I progressed through the task, I understood that the table and filters were tighly 
coupled so I combined that into one piece of code. 

Initially, I called the fetchLocations function in the map component. However, that meant when the page was loaded, 
the map initially didn't have any markers. It Also meant that separate calls will need to be made from each component to get the data, causing repetitive code. Thus, I fetched the data in the App.js component and passed the data to both the table and map components through props.
Also, I only rendered the map only when the data was available so the markers were on the map when rendered.

## Map Decisions

I chose to use Mapbox for the interactive map implementation because I previously had have exposure using it and was suitable for 
adding markers and pop-ups. 

### Styling Decisions

I have installed Bootstrap and SCSS for the styling of this web application. 

However, as I progressed through the excercise, I didn't use Bootstrap as it wasn't necessary for the styling.
I used a mobile-first approach, the mobile css was default and media css query was used to add styling for larger screens.
SCSS was used extensively as it helps keep a good stucture of the styling making it readable and more efficient. 
I have added variables to store some CSS values which ensures, if a change was needed, then simply changing the value of the variables
would make that very easy. 
