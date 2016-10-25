/**
 * Created by delwar on 10/25/16.
 */

let checkName = (firstname, lastname)=> {
  if(firstname !=='delwar' || lastname !== 'hossain'){
    console.log('You are not Delwar Hossain');
  }
  else{
    console.log('You are Delwar Hossain');
  }
}
checkName('delwar', 'hossain');
