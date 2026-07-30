import React from 'react';
import ChannelGrid from '@/components/ChannelGrid';

const LocalChannelsLA = () => {
  const majorNetworks = [
    {
      name: 'ABC KABC-TV',
      number: '7',
      category: 'News',
      description: 'Los Angeles ABC station with Eyewitness News, national shows, and local events'
    },
    {
      name: 'NBC KNBC',
      number: '4',
      category: 'News',
      description: 'NBC Los Angeles with Today in LA, primetime programming, and breaking news'
    },
    {
      name: 'CBS KCBS-TV',
      number: '2',
      category: 'News',
      description: 'CBS Los Angeles featuring local news, sports, and national CBS programming'
    },
    {
      name: 'FOX KTTV',
      number: '11',
      category: 'News',
      description: 'FOX 11 LA with Good Day LA, NFL coverage, and local investigative reports'
    },
    {
      name: 'PBS KCET',
      number: '28',
      category: 'Entertainment',
      description: 'Southern California public television with documentaries and cultural programming'
    },
    {
      name: 'The CW KTLA',
      number: '5',
      category: 'Entertainment',
      description: 'KTLA 5 Morning News, CW shows, and classic television programming'
    }
  ];

  const spanishLanguage = [
    {
      name: 'Univision KMEX',
      number: '34',
      category: 'Spanish',
      description: 'Leading Spanish network in Los Angeles with news, telenovelas, and sports'
    },
    {
      name: 'Telemundo KVEA',
      number: '52',
      category: 'Spanish',
      description: 'Spanish-language network with exclusive soccer, news, and entertainment'
    }
  ];

  const sportsChannels = [
    {
      name: 'Spectrum SportsNet LA',
      number: '691',
      category: 'Sports',
      description: 'Official Los Angeles Dodgers network with exclusive baseball coverage'
    },
    {
      name: 'Fox Sports West',
      number: '692',
      category: 'Sports',
      description: 'LA Kings, Clippers, Angels, and Ducks games with expert analysis'
    },
    {
      name: 'Pac-12 Network',
      number: '693',
      category: 'Sports',
      description: 'USC, UCLA, and West Coast college sports with live games and studio shows'
    }
  ];

  const localNews = [
    {
      name: 'KTLA News',
      number: '5',
      category: 'News',
      description: '24-hour Los Angeles news with morning show, breaking updates, and weather'
    },
    {
      name: 'KCAL News',
      number: '9',
      category: 'News',
      description: 'Independent LA news station with continuous coverage and special reports'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Los Angeles Local Channels
        </h2>
        <p className="text-slate-300 text-lg max-w-3xl mx-auto">
          Stream all major Los Angeles broadcast networks, regional sports, and local news channels with IPTV USA
        </p>
      </div>

      <ChannelGrid 
        channels={majorNetworks} 
        title="Major Broadcast Networks" 
        categoryBadge="6 Channels"
      />
      
      <ChannelGrid 
        channels={sportsChannels} 
        title="Los Angeles Sports Networks" 
        categoryBadge="3 Channels"
      />
      
      <ChannelGrid 
        channels={spanishLanguage} 
        title="Spanish-Language Networks" 
        categoryBadge="2 Channels"
      />
      
      <ChannelGrid 
        channels={localNews} 
        title="Local News Channels" 
        categoryBadge="2 Channels"
      />
    </div>
  );
};

export default LocalChannelsLA;