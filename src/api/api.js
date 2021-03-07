import { gql } from 'apollo-boost'

export const GET_QUERY = gql`
query {
    getUser {
        id
        name
        surname
        idnumber
        phnumber
        email
        password
    },
    getDriver {
      id
      name
      surname
      idnumber
      phnumber
      email
      password
      car{
        carType
        carOption
      }
    },
}
`;

export const CREATE_USER_QUERY = gql`
mutation registerUser(
$name: String!,
$surname: String!,
$idnumber: String!,
$phnumber: String!,
$email: String!,
$password: String!,
){
  registerUser(
  name:$name,
  surname: $surname,
  email: $email,
  password:$password,
  idnumber: $idnumber,
  phnumber: $phnumber,
  ){id}
}
`;

export const CREATE_DRIVER_QUERY = gql`
mutation registerDriver(
  $name: String!,
  $surname: String!,
  $idnumber: String!,
  $phnumber: String!,
  $email: String!,
  $password: String!
  ){
  registerDriver(
    DriverInput : { 
      name:$name,
      surname: $surname,
      email: $email,
      password:$password,
      idnumber: $idnumber,
      phnumber: $phnumber
    })
    {
      id
    }
}
`;

export const REMOVE_USER_QUERY = gql`
  mutation deleteUser($id: ID!) {
    deleteUserfromClient(id: $id)
  }
`;

export const ADD_CAR = gql`
  mutation registerCar(
    $driverId: String!
    $carType: String
    $carOption: String
    ){
    registerCar(
      ItemCar : {
        driverId: $driverId,
        carType: $carType,
        carOption: $carOption,
      }
    )
    {
      id
    }
  }
`

export const REQUEST_ROOM = gql`
  mutation addRoomRequest(
    $carType: String!
    $dateTime: String!
  ){
    addRoomRequest(
      carType : $carType,
      dateTime : $dateTime
    ){
      id
    }
  }
`

export const SIGNUP_MUTATION = gql`
  mutation SignupMutation(
    $email: String!
    $password: String!
    $name: String!
  ) {
    signup(
      email: $email
      password: $password
      name: $name
    ) {
      token
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation LoginMutation(
    $email: String!
    $password: String!
  ) {
    login(email: $email, password: $password) {
      token
    }
  }
`;


