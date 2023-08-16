import React, {useEffect , useState} from 'react'
import './CalCalculator.css'
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore'
import { db } from '../../Config/FireBaseConfig'

function CalCalculator() {

  const [clientData, setClientData ] = useState({});

  useEffect(() => {
     const userInfo = collection(db, "ClientData")

     //set up query to filter responses and sort and then get first 5 articles
     const q = query(userInfo)

     getDocs(q, userInfo)
     .then((res) => {
      console.log(res.docs[0].data()) 
      setClientData(res.docs[0].data())
      // const clientData = res.docs
     }).catch((err) => {console.log(err)})
  }, [])







// const userData = {weight: 88, height: 185.42, age: 22}


//Base metabolic Rate for women calculation
//BMR
//Women BMR = 655.1 + (9.563 x weight in kg)
// + (1.850 x height in cm)
// - (4.676 x age in years)


const FBMR = 655.1 + (9.563 * clientData.Weight) + (1.850 * clientData.Height) - (4.676 * clientData.Age);

const femaleBMR = FBMR

console.log("final cal BMR female" , femaleBMR)

// Base metabolic Rate for men calculation
// BMR 
//Men BMR = 66.47 + (13.75 x weight in kg)
// + (5.003 x height in cm)
// - (6.755 x age in years)

const MBMR = 66.47 + (13.75 * clientData.Weight) + (5.003 * clientData.Height) - (6.755 * clientData.Age);

const MaleBMR = MBMR

console.log("final cal BMR male" , MaleBMR)

//AMR calculations multiplication based of level of activity 

//little to no excercise
const Sedentary = (MaleBMR * 1.2)
const SedentaryDef = (MaleBMR * 1.2) - 500
const SedentarySurp = (MaleBMR * 1.2) + 500

const LightlyAct = (MaleBMR * 1.375)
const LightlyActDef = (MaleBMR * 1.375) - 500
const LightlyActSurp = (MaleBMR * 1.375) + 500

const ModeratelyAct =  (MaleBMR * 1.55)
const ModeratelyActDef =  (MaleBMR * 1.55) - 500
const ModeratelyActSurp =  (MaleBMR * 1.55) + 500

const Active = 500 - (MaleBMR * 1.725)
const ActiveDef = 500 - (MaleBMR * 1.725) - 500 
const ActiveSurp = 500 - (MaleBMR * 1.725) + 500 

const VeryAct = (MaleBMR * 1.9)
const VeryActDef = (MaleBMR * 1.9) - 500
const VeryActSurp = (MaleBMR * 1.9) + 500


console.log("AMR" , ModeratelyAct)

  return (
    <div className='calcalculator-container'>
        <h1>CalCalculator</h1>
        <p>Height {clientData?.Height} cm</p>
        <p>Weight {clientData?.Weight} kg</p>
        <p>Age {clientData?.Age} years</p>
        {/* Make the  tag below a toggle between a number for cal surplus and defict. */}
        <p>Surplus/Defict {ModeratelyAct} surplus : {ModeratelyActSurp}  deficit : {ModeratelyActDef}</p>

    </div>
  )
}

export default CalCalculator