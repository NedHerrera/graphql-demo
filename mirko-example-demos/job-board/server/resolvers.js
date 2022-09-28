import { Job, Company } from './db.js'

export const resolvers = {
    Query: {
        job: (parent, args, context) => {
            return Job.findById(args.id)
        }
        ,
        jobs: () => {
            return Job.findAll()
        } 
        ,
        company: (parent, { id }, context) => {
            return Company.findById(id)
        }
    },

    Job: {
        company: (job) => {
            return Company.findById(job.companyId)
        }
    },

    Company : {
        jobs: (parent, args, context) => {
            return Job.findAll( (job) => job.companyId === parent.id )
        }
    },

    Mutation: {
        createJob: (parent, { input }, { user }) => {
            if(!user){
                throw new Error('Unauthorized') // whit this we can check auth before make changes
            }
            return Job.create( { ...input, companyId: user.companyId })
        }
    }
}