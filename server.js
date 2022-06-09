const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const beaches = {
    'siesta key': {
        'locationName' : 'Siesta Key',
        'location' : 'Southwest coast of Florida, south of Tampa',
        'totalSize' : '3.46 square miles',
        'knownFor' : 'Known for its quartz sands and turquoise, shallow waters.',
        'image' : '<img src="https://i.ibb.co/QdVWMKf/kurt-cotoaga-5t71h3ld-JI-unsplash-1.jpg" alt="siesta key, florida" border="0">'
    },
    'palm beach': {
        'locationName' : 'Palm Beach',
        'location' : 'Southeast coast of FLorida, north of Miami',
        'totalSize' : '7.80 square miles',
        'knownFor' : 'Known for legendary resorts, exquisite mansions, and historic landmarks.',
        'image' : '<img src="https://i.ibb.co/Vmm3ZDy/William-Leonard-52-0.jpg" alt="palm beach, florida" border="0">'
    },
    'sanibel island': {
        'locationName' : 'Sanibel Island',
        'location' : 'Southwest coast of FLorida, near Ft. Myers.',
        'totalSize' : '33.21 square miles',
        'knownFor' : 'Known for pristine beaches and award-winning gardens and nature preserves.',
        'image' : '<img src="https://i.ibb.co/dBjymLC/sanibel.jpg" alt="sanibel island" border="0">'
    },
    'cocoa beach': {
        'locationName' : 'Cocoa Beach',
        'location' : 'East coast of Central Florida, an hour from Orlando.',
        'totalSize' : '15.19 square miles',
        'knownFor' : 'Known for its surf history like producing 11-time world surfing champion Kelly Slater.',
        'image' : '<https://i.ibb.co/nQTWjzy/Cocoa-Beach.jpg" alt="Cocoa-Beach" border="0">'
    },
    'daytona beach': {
        'locationName' : 'Daytona Beach',
        'location' : 'East coast of Central Florida, 54 miles north of Orlando.',
        'totalSize' : '68.19 square miles',
        'knownFor' : 'Known for auto racing and racing enthusiasts.',
        'image' : '<img src="https://i.ibb.co/qMXyYG5/daytona.jpg" alt="daytona" border="0">'
    },
    'new smyrna beach': {
        'locationName' : 'New Smyrna Beach',
        'location' : 'East coast of Central Florida, 56 miles north of Orlando.',
        'totalSize' : '41.29 square miles',
        'knownFor' : 'Known for its coastal architecture and laidback community. It has also been dubbed "The Shark Bite Capital of the World."',
        'image' : '<img src="https://i.ibb.co/5kPfTGn/new-smyrna.jpg" alt="new-smyrna" border="0">'
    },
    'clearwater': {
        'locationName' : 'Clearwater',
        'location' : 'West coast of Central Florida, near Tampa.',
        'totalSize' : '35.92 square miles',
        'knownFor' : 'Known for white sands and clear blue waters on the Gulf Coast.',
        'image' : '<img src="https://i.ibb.co/h81RYCZ/clearwater.jpg" alt="clearwater" border="0">'
    },
    'islamorada': {
        'locationName' : 'Islamorada',
        'location' : 'South Florida, in the Florida Keys.',
        'totalSize' : '6.70 square miles',
        'knownFor' : 'Known for up-scale small-town atmosphere and is the "Sport Fishing Capital of the World".',
        'image' : '<img src="https://i.ibb.co/64RfLW4/islamorada.jpg" alt="islamorada" border="0">'
    },
    'amelia island': {
        'locationName' : 'Amelia Island',
        'location' : 'Northeast coast of Florida, near the Florida-Georgia border.',
        'totalSize' : '18.2 square miles',
        'knownFor' : 'Known as the "Isle of Eight Flags," it is renowned for its pristine beaches and clean water.',
        'image' : '<img src="https://i.ibb.co/K6hSbTF/amelia-island.jpg" alt="amelia-island" border="0">'
    },
    'south beach': {
        'locationName' : 'South Beach',
        'location' : 'Southeast coast of Florida, in Miami',
        'totalSize' : '6.80 square miles',
        'knownFor' : 'Known for its energy, nightlife and lifestyle.',
        'image' : '<img src="https://i.ibb.co/tBFCMZv/south-beach.jpg" alt="south-beach" border="0">'
    },
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:beachName', (request, response) => {
    const beachesName = request.params.beachName.toLowerCase()
    if(beaches[beachesName]){
        response.json(beaches[beachesName])
    }else{
        response.json(beaches['daytona'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log('Server is running.')
})