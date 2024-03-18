import {request, gql} from 'graphql-request';
const MASTER_URL = "https://api-ap-south-1.hygraph.com/v2/cltvdsiy503kn07uxq8zqlsnn/master"

export const getCourseList=async()=>{
    const query = gql`
    query CourseList {
        courses {
          id
          name
          price
          time
          instructor
          banner {
            url
          }
        }
      }
    `

    const result = await request(MASTER_URL, query);
    return result;
}