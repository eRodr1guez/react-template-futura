import React from 'react';
import '../styles/stylesheets/Services.css';
import { Header } from './common';

function Services() {
  return (
    <div className='services'>
      <Header text='Services'/>
      <p>
        Our highly trained personnel have experience in all areas of third party logistics (3PL). We provide public and contract warehousing to all types of industries. We also offer a complete line of value added services at our Miami warehouse facility.
      </p>
      <div className='information'>
        <div className='top'>
          <div className='card'>
            <h4>Shipping</h4>
            <p>
              Futura Logistics Corporation provides superior customer service and a fail safe system for receiving and shipping out products. Types of posts: Maritime, air and land
            </p>
          </div>
          <div className='card'>
            <h4>Customer Services</h4>
            <p>
              On a warehouse operations level, we have made every effort to create a fail-safe system through our entire management system.
            </p>
          </div>
        </div>

        <div className='bottom'>
          <div className='card'>
            <h4>International Presence</h4>
            <p>
              We have presence in South America, Central America, Mexico and the Caribbean.
            </p>
          </div>
          <div className='card'>
            <h4>Receiving</h4>
            <p>
              Futura Logistics Corp. verifies that what has been received by us is accurately placed into inventory and what is picked from inventory accurately matches what has been ordered.
            </p>
          </div>
        </div>
      </div>
      <p>
        We have a professional and outstanding reputation in the performance of supply chains and freight management. We streamline the efforts decreasing time deliveries via air, sea bulk shipments, customs clearance efforts; all geared to your business more effective and competitive.
      </p>
      <p>
        We always work on finding the most effective, appropriate and cost effective solution for a network of specialized providers associated with our company. This allows us to manage systems and processes global leaderboards, offering transport services that are more reliable, flexible and cost effective.
      </p>
      <div className='management'>
        <h3>Merchandise Management</h3>
        <div className='content'>
          <div className='card large'>
            <h4>Air</h4>
            <p>
              We manage the entire service management, from the pickup at your supplier-manufacturer-distributor Local-State-national, storage, customs documentation for export-import, process control through the tracking number of shipments, including delivery at destination. We work with large commercial operators leading hundreds of routes and large volumes of cargo space available which generates our customers achieve competitive pricing and availability of space for loading.
            </p>
          </div>
          <div className='card small'>
            <h4>Sea</h4>
            <p>
              In our shipping services offer a variety of flexible options, lower volume capacity loads a full container (LOL), full container loads (FCL) and split shipments or shipments different loads. We also offer shipping documentation for export, customs documentation in source and destination
            </p>
          </div>
          <div className='card large'>
            <h4>Land</h4>
            <p>
              Our logistics system uses a network of specialized operators which facilitates and manages more flexibility, control and choice to our customers. Besides our own truck fleet services, we work with independent companies, highly professional where we group combined volumes to destinations where our fleet misses and together we achieve more competitive prices for our customers.
            </p>
          </div>
        </div>
      </div>
      <p>Any Questions?</p>
      <a href='/'>CONTACT</a>
    </div>
  );
}

export { Services };
