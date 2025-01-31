const helloWorld = document.getElementsByTagName("hello-world")[0]; 
if (helloWorld) {
    helloWorld.addEventListener("click", (e) => {
        console.log("hello World")
    })
}