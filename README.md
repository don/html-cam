The browser in Android 4 is able to take pictures from a web page and display them without any plugins or server interaction.  This demo uses the Device API and File API to take and display a picture on a phone using the browser.

Watch a [video of the demo](https://vimeo.com/41577221).

Try it on your Android phone [http://don.github.com/html-cam/](http://don.github.com/html-cam/).

I wrote this demo after reading David Calhoun's post about [Android implementing device APIs](http://davidbcalhoun.com/2011/android-3-0-honeycomb-is-first-to-implement-the-device-api).

This works on my Google Nexus S running Ice Cream Sandwich (4.0.4). The Device API works on Samsung Galaxy Tab 10.1 with Honeycomb (3.2) but the File APIs do not.  YMMV.

Loading images from the gallery is finicky.  Images load from the device but fail to load from Picasa albums.  I had to alter the image blob and change data:base64 to data:image/jpeg;base64 to get photos from galleries to display.

I kludge the photo orientation based on the device orientation, clearly there is a better solution.

It's possible to run the browser out of memory.  I'm guessing this is because a huge photo is encoded into a base64 string.  Maybe <code>window.URL.createObjectURL(file)</code> would work better than reading the image with <code>FileReader</code>?

Adjusting the input tag can control the input types:

	<input type="file" />
	Browser prompts for camera, camcorder, sound recorder, music track, or gallery

	<input type="file" accept="image/*" />			
	Browser prompts for camera or gallery	

	<input type="file" accept="image/*;capture=camera" />			
	Browser goes directly to the camera



