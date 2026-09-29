'use client';

import { BedDouble, CalendarCheck, CalendarDays, MapPin, MessageCircle, Search, Users } from 'lucide-react';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { site, whatsappUrl } from '@/lib/site-data';

const bookingTabs = ['Cottages', 'Family Stay', 'Pool Day', 'Dining'];

function addDays(date: Date, days: number) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function toInputDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

export function BookingWidget() {
  const today = useMemo(() => new Date(), []);
  const [activeTab, setActiveTab] = useState(bookingTabs[0]);
  const [checkIn, setCheckIn] = useState(toInputDate(addDays(today, 1)));
  const [checkOut, setCheckOut] = useState(toInputDate(addDays(today, 2)));
  const [adults, setAdults] = useState(2);
  const [cottages, setCottages] = useState(1);

  const enquiryMessage = `Hello Betelnut Resort, I want to check ${activeTab} availability for ${adults} adult${
    adults > 1 ? 's' : ''
  }, ${cottages} cottage${cottages > 1 ? 's' : ''}. Check-in: ${checkIn}. Check-out: ${checkOut}.`;

  function updateCheckIn(value: string) {
    setCheckIn(value);
    if (value && checkOut && value >= checkOut) {
      setCheckOut(toInputDate(addDays(new Date(value), 1)));
    }
  }

  return (
    <form className="booking-card" action={site.bookingUrl} target="_blank" aria-label="Check resort availability">
      <input type="hidden" name="stay" value={activeTab} />
      <input type="hidden" name="destination" value="Diveagar, Maharashtra" />
      <div className="booking-tabs" aria-label="Stay categories">
        {bookingTabs.map((tab) => (
          <button
            className={activeTab === tab ? 'active' : ''}
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="booking-fields">
        <div className="booking-field destination">
          <MapPin size={19} aria-hidden="true" />
          <div>
            <span>Destination</span>
            <strong>Diveagar, Maharashtra</strong>
          </div>
        </div>
        <label className="booking-field">
          <CalendarDays size={19} aria-hidden="true" />
          <div>
            <span>Check-in</span>
            <input type="date" name="checkin" value={checkIn} min={toInputDate(today)} onChange={(event) => updateCheckIn(event.target.value)} />
          </div>
        </label>
        <label className="booking-field">
          <CalendarCheck size={19} aria-hidden="true" />
          <div>
            <span>Check-out</span>
            <input type="date" name="checkout" value={checkOut} min={toInputDate(addDays(new Date(checkIn), 1))} onChange={(event) => setCheckOut(event.target.value)} />
          </div>
        </label>
        <div className="booking-field guests">
          <Users size={19} aria-hidden="true" />
          <div>
            <span>Guests</span>
            <div className="guest-controls">
              <label>
                <select name="adults" value={adults} onChange={(event) => setAdults(Number(event.target.value))}>
                  {[1, 2, 3, 4, 5, 6].map((value) => (
                    <option key={value} value={value}>
                      {value} adult{value > 1 ? 's' : ''}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <select name="cottages" value={cottages} onChange={(event) => setCottages(Number(event.target.value))}>
                  {[1, 2, 3, 4, 5, 6].map((value) => (
                    <option key={value} value={value}>
                      {value} cottage{value > 1 ? 's' : ''}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>
        </div>
        <button className="booking-search" type="submit">
          <Search size={20} aria-hidden="true" />
          Search
        </button>
      </div>
      <div className="booking-shortcuts" aria-label="Quick actions">
        <a href={whatsappUrl(enquiryMessage)} target="_blank" rel="noreferrer">
          <MessageCircle size={16} aria-hidden="true" />
          WhatsApp enquiry
        </a>
        <Link href="/cottages">
          <BedDouble size={16} aria-hidden="true" />
          View cottages
        </Link>
        <Link href="/explore-diveagar">
          <MapPin size={16} aria-hidden="true" />
          Explore nearby
        </Link>
      </div>
    </form>
  );
}
