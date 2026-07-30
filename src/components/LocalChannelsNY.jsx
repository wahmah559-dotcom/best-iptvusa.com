import React from 'react';
import ChannelGrid from '@/components/ChannelGrid';

const LocalChannelsNY = () => {
  const majorNetworks = [
    {
      name: 'ABC WABC-TV',
      number: '7',
      category: 'News',
      description: 'New York flagship ABC station with local news, national programming, and live events'
    },
    {
      name: 'NBC WNBC',
      number: '4',
      category: 'News',
      description: 'NBC New York with Today Show, SNL, and comprehensive local news coverage'
    },
    {
      name: 'CBS WCBS-TV',
      number: '2',
      category: 'News',
      description: 'CBS New York offering primetime shows, sports, and local investigative journalism'
    },
    {
      name: 'FOX WNYW',
      number: '5',
      category: 'News',
      description: 'FOX 5 New York with Good Day NY, sports, and breaking news coverage'
    },
    {
      name: 'PBS WNET',
      number: '13',
      category: 'Entertainment',
      description: 'New York public television with documentaries, arts, and educational content'
    },
    {
      name: 'The CW WPIX',
      number: '11',
      category: 'Entertainment',
      description: 'CW programming, classic TV, and Yankees baseball broadcasts'
    }
  ];

  const spanishLanguage = [
    {
      name: 'Univision WXTV',
      number: '41',
      category: 'Spanish',
      description: 'Leading Spanish-language network with telenovelas, news, and sports'
    },
    {
      name: 'Telemundo WNJU',
      number: '47',
      category: 'Spanish',
      description: 'Spanish network featuring news, entertainment, and premium soccer coverage'
    }
  ];

  const sportsChannels = [
    {
      name: 'YES Network',
      number: '631',
      category: 'Sports',
      description: 'Home of the New York Yankees with exclusive games and sports analysis'
    },
    {
      name: 'MSG Network',
      number: '634',
      category: 'Sports',
      description: 'New York Knicks, Rangers, Islanders, and Devils live game broadcasts'
    },
    {
      name: 'SNY (SportsNet NY)',
      number: '639',
      category: 'Sports',
      description: 'Official New York Mets network with exclusive baseball coverage'
    }
  ];

  const localNews = [
    {
      name: 'NY1 News',
      number: '1',
      category: 'News',
      description: '24/7 New York City news, weather, traffic, and local politics coverage'
    },
    {
      name: 'Spectrum News NY1',
      number: '1001',
      category: 'Cable',
      description: 'Hyperlocal NYC news with borough-specific reporting and live updates'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          New York Local Channels
        </h2>
        <p className="text-slate-300 text-lg max-w-3xl mx-auto">
          Access all major New York broadcast networks, regional sports channels, and local news stations with IPTV USA
        </p>
      </div>

      <ChannelGrid 
        channels={majorNetworks} 
        title="Major Broadcast Networks" 
        categoryBadge="6 Channels"
      />
      
      <ChannelGrid 
        channels={sportsChannels} 
        title="New York Sports Networks" 
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

export default LocalChannelsNY;