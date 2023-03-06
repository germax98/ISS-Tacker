## The Child 

In React, components can have child components, which are passed to them as props. The IssPositionProvider component is a custom component that we created, and we want to use it to provide certain data (the ISS position, in this case) to all of its child components.

To do this, we need to wrap the child components with the IssPositionProvider component, so that they can all access the data provided by it. We do this by using the children prop, which is a special prop that is used to pass child components to a parent component.

In our example, we wrapped the App component with the IssPositionProvider component, so that all of its child components (i.e., HeaderTest, IssData, and MapIss) can access the data provided by the IssPositionProvider.