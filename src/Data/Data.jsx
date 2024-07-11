    async function fetchEvents(){
        const response=await fetch("https://app.ticketmaster.com/discovery/v2/events.json?countryCode=MX&apikey=sbV2n9Do6KLydKxvDKov4XXdeJwbHvGq")
        const data=await response.json()
        const events=data._embedded.events
        
        console.log(events)
    }

    fetchEvents()