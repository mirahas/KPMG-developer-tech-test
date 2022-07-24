# Pre-build plan

The project was created as a react application.

My initial through process was to make the map, filter and table features separate reusable components along with fetching the data. 
This helps keep the code clean and readable. When I progressed through the task, I understood that the table and filters were tighly 
coupled so I combined that into one piece of code. 
Initially, I fetched the location data from the map component to the _fetchLocations function. However, that meant when the page was loaded, 
the map initially didn't have any markers and that loaded after the call was made. Thus, I fed the data to the map component through props then
only rendered the map when the data was available. There is now a delay when loading the map when the page first starts but I thought that was better 
having a map without markers.

## Map Decisions

I chose to use Mapbox for the interactive map implementation because I previously had have exposure using it and was suitable for 
adding markers and pop-ups. 

### Styling Decisions

I have installed Bootstrap and SCSS for the styling of this web application. 

However, as I progressed through the excercise, I didn't use Bootstrap as it wasn't necessary to achieve the task.
On the other hand, SCSS was used extensively as it helps keep a good stucture of the styling making it readable and more efficient. 
I have added variables to store some CSS values which ensures, if a change was needed, then simply changing the value of the variables
would make that very easy. 
