## Lil' Twitter

## Learning Competencies

- Build a client side heavy Rails application.
- Consume a JSON API.
- Build Single Page App.
- write organized JavaScript code

## Summary

Your mission: build a one-page app using  Javascript to render a simple dashboard for a twitter application. The HTML, CSS, and back-end are already written for you -- all you need to do is write the JavaScript.

## Development Setup

requires ruby and rubygems.
```sh
$ bundle install
$ rake db:create && rake db:migrate && rake db:seed
$ rails server
```

Install React Tools
```sh
npm install react-tools -g

```
create a react folder
```sh
mkdir app/assets/react
```
watch your jsx files:
```sh
jsx --watch app/assets/react/ app/assets/javascripts/components -x jsx

```
## Releases

### Release 0: Static React
Turn the views into React components

### Release 1: Dynamic React
Let's get data from our API and update the components state. Don't worry about the TweetBox for now,
We'll work on that in the next release. For now, all we need is to get all recent tweets from our API and display them on the page.
Check the API docs below.

##### API Documentation

`GET /tweets/recent` returns the 50 most recently created tweets in JSON format. The response body looks like this:

  ```
  [
    { "avatar_url":"http://robohash.org/marco_schumm",
      "content":"Ut fugit ut labore repellendus.",
      "created_at":"2014-07-20T20:27:42Z",
      "handle":"@marco_schumm",
      "id":500,
      "updated_at":"2014-07-20T20:27:42Z",
      "username":"Adaline Bins",
      "hashtag_names": [ "est", "rerum", "distinctio" ] }
  ]
  ```

`GET /tweets/search/:hashtag` returns the 50 most recent tweets associated with the given hashtag, with a format similar to the `/recent` endpoint. Will return an empty body with a status code of 404 if the hastag does not exist.

`POST /tweets` creates a new a tweet and associates it with the specified hashtags, if provided. Hashtags that did not previously exist are also created. a request body should take this format:

  ```
    "tweet":
      { "avatar_url":"http://robohash.org/marco_schumm",
      "content":"Ut fugit ut labore repellendus.",
      "handle":"@marco_schumm",
      "username":"Adaline Bins" }
    hashtags: [ 'foo', 'bar', 'baz' ]
  ```

If no data is provided for avatar_url, content, handle, or username, fake data is used instead.

The endpoint returns the created tweet as JSON.

```
    { "avatar_url":"http://robohash.org/marco_schumm",
      "content":"Ut fugit ut labore repellendus.",
      "created_at":"2014-07-20T20:27:42Z",
      "handle":"@marco_schumm",
      "id":500,
      "updated_at":"2014-07-20T20:27:42Z",
      "username":"Adaline Bins",
      "hashtag_names": [ "est", "rerum", "distinctio" ] }
```

`GET /hashtags/popular` returns the names of the 10 most popular hashtags. The output looks like this:

```
  [ "est",
    "voluptas",
    "consequatur",
    "at",
    "accusamus",
    "doloremque",
    "culpa",
    "quod",
    "iure",
    "sint" ]
```
