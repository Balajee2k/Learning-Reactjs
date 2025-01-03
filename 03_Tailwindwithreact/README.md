.................................................................................................//////////////////
C1:
so humlog ko agar props ke bare me sikhna hai to pahle jo component me title use karna hai to uske liye ap us component ke function me props name ka variable pass kar sakte hai like in card.jsx:
function Card(props)
console.log(props,"props") // yha jo tum card me likah hai jaise username and myarr to wo dikh jayega console me 
console.log(props.username) // so yha humlog condole me dekhenge ki balajee print hoke ajayega

then you can do console.log(props,"props") to know ki props kya hai then you can see in console that ye object hai to app kuch bhi pass kr sakte like eg: in app.jsx:
function App() {
  let myObj =
  {
    username: "hitesh",
    age: 21
  }
  let newArr = [1, 2, 3]
  return (
    <>
    <Card username="balajee" myarr={newArr}/> ya myobj bhi pass kr sakt ho
    <Card/ >
    </>
  )
}

C2:
NOW HUMLOG ............................
props.username ke jagah function me direct username pass krdenge to kam same hi karega and official yahi use hota hai toL:
eg in card.jsx:
function Card({username,btnText="visit me"}){
  console.log(username);
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      {btnText}
    </button>
}

AND IN APP.JSX:

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "hitesh",
    age: 21
  }
  let newArr = [1, 2, 3]

  return (
    <>
    <h1 className='bg-green-500 p-10 mb-1 '>Tailwind css test hai bsdk</h1>
    <Card username="balajee" btnText="click me "/>
    <Card username="anushka" />
    </>
  )
}