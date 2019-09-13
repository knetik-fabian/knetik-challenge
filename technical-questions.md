Technical Questions:
1. How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.
--The code challenge took me around 2hrs. With more time - I would have added some unit tests, perhaps add the capability to combine filters, and make it a lot more "pretty".
2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
--Javascript native promise has been enhanced with the finally() method. The finally() method allows us to run code regardless of wether or not the promise was successful.
--```fetch('https://recruitment-test-api.devsandbox.knetikcloud.com/devices?filter=location:12')
  .then((response) => {
    console.log(response.status);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    document.querySelector('#test-element').style.display = 'none';
  });```
3. How would you track down a performance issue in production? Have you ever had to do this?
--Poor app performance is usually caused by poor quality code and/or network connectivity issues. Sometimes things like network bandwidth, client bandwidth, client browser, etc can be to blame for poor performance. However, sometimes it can be the code. If the code is doing too much looping, too many disk operations, etc - this may also impact the performance of the app.

4. How would you improve the Knetik APIs that you just used?
--I ran into some issues combining filters, so I would maybe change the way you guys are combining filters. It seemed to be when I used the "|" as a combinator for multiple filters. Perhaps we can improve that to allow for multiple filters to be combined (the docs suggest this already works but does not in practice - go to: https://recruitment-test-api.devsandbox.knetikcloud.com/devices?filter=location:12|connected:true)

5. Please describe yourself using JSON.
```
{
    "Person":{
        "age":30,
        "name":"Ranfys Fabian Valle-Simmons",
        "canCode":true,
        "passions":["Engineering","Family"]
    }
}
```
