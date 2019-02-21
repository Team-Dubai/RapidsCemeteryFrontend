import { Component, OnInit } from '@angular/core';
import { IChronologyEvent } from 'src/app/models/chronology-event.interface';

@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: Array<IChronologyEvent> = [
    {
       title: '1700s',
       content: [
          "Algonkin Indian settlement along the river corridor at today's UR River Campus",
          "Native American travel and trade routes converge at today's Brooks Landing",
          "Colonial period: east side of the river under British and west side under French control",
          "1776 Revolutionary War begins. At least one veteran buried at Rapids Cemetery",
          "1790 James and William Wadsworth purchase vast land from Geneseo to Rochester"
        ]
    },
    {
      title: '1800',
      content: [
        "J.Wadsworth builds tavern and store near the Rapids under Isaac Castle's management. Area known initially as Castletown. Grain shipments begin from upper Genesee River"
      ]
    },
    {
      title: '1810',
      content: [
        "A tavern, school, church and a few residences at Castletown / Rapids settlement",
        "Wadsworths donate 1.2 acres for a cemetery (originally Wadsworth Cemetery)"
      ]
    },
    {
      title: '1812',
      content: [
        "Hamlet Scrantom family arrives at Rapids (first permanent residents at Rochesterville)",
        "War of 1812 includes a skirmish on Lake Ontario at the mouth of the Genesee River"
      ]
    },
    {
      title: '1817',
      content: [
        "Legislation to create Erie Canal favors downtown development hindering Castletown"
      ]
    },
    {
      title: '1822',
      content: [
        "Feeder Canal at Rapids diverts river boat traffic eastward and away from Castletown"
      ]
    },
    {
      title: '1832 (ends 1881)',
      content: [
        "Genesee Valley Canal follows west river corridor through Rapids to Pennsylvania"
      ]
    },
    {
      title: '1840-65',
      content: [
        "Susan B. Anthony resides at her father's family farm on Rapids Road (Brooks Ave.)",
        "Frederick Douglass joins the family for tea on Sundays and discuss Abolition issues"
      ]
    },
    {
      title: '1845',
      content: [
        "Pioneer settlement days dwindle. Area now referred to as Rapids neighborhood"
      ]
    },
    {
      title: '1850s',
      content: [
        "Underground Railroad activity along Brooks Avenue and Genesee Street 'stations'"
      ]
    },
    {
      title: '1854',
      content: [
        "Cemetery Road surveyed for Rapids Cemetery (later became Congress Avenue)"
      ]
    },
    {
      title: '1861-65',
      content: [
        "Civil War: Local recruits train at nearby Camp Fitz-John Porter (Flint & Cottage Streets)",
        "Some from the 140th and 108th Volunteer Infantry are buried at Rapids Cemetery"
      ]
    },
    {
      title: '1880s',
      content: [
        "Sale of farmland and nurseries create subdivisions for housing in southwest Rochester",
        "Elmwood Ave. Bridge pushes development of Genesee Valley Park (Olmsted design)"
      ]
    },
    {
      title: '1890s',
      content: [
        "Trolley service links Rapids neighborhood with urban core and jobs",
        "Reports of vandalism and roaming packs of dogs and truancy at Rapids Cemetery",
        "Spanish-American War 1898 (one purported veteran burial at Rapids Cemetery)"
      ]
    },
    {
      title: '1900s',
      content: [
        "Last payment of taxes to City on behalf of Rapids Cemetery",
        "The Town of Chili cedes the Rapids Cemetery land to the City of Rochester in 1902"
      ]
    },
    {
      title: '1910',
      content: [
        "A century of neglect  begins with cemetery used as a neighborhood baseball diamond",
        "Survey of graves conducted by Daughters of the American Revolution"
      ]
    },
    {
      title: '1930s',
      content: [
        "First World War (1914-1918): No known veteran burial at Rapids",
        "Newspaper accounts of two accidental deaths at Rapids Cemetery",
        "A toppled headstone killed a young child followed by intentional vandalism of other headstones"
      ]
    },
    {
      title: '1940s',
      content: [
        "Last burial at Rapids in 1941. Overgrown vegetation concealed cemetery's identity"
      ]
    },
    {
      title: '1941-45',
      content: [
        "World War II: There is no burial at Rapids Cemetery of a WWII veteran",
        "Decades of back taxes forgiven by City. No definable ownership of property"
      ]
    },
    {
      title: '1950s',
      content: [
        "Return to Rapids Cemetery of an infant's headstone found a mile distant",
        "Veterans Executive & Memorial Council advocates for improvements at cemetery"
      ]
    },
    {
      title: '1960s',
      content: [
        "Civil War Centennial commemorated with new headstones for Civil War veterans",
        "Cemetery continues to be used as a neighborhood sports field. Northern section overgrown",
        "Proposal to use site for Veterans housing runs into legal challenges, Dropped"
      ]
    },
    {
      title: '1970s-2010',
      content: [
        "Period of neglect continues. Grass cut three times per year. No sense of ownership"
      ]
    },
    {
      title: '2015-Present',
      content: [
        "Local Veterans groups enlist support of 19th Ward residents to reclaim cemetery",
        "City of Rochester assumes responsibility for maintaining Rapids Cemetery",
        "Ground Penetrating Radar scans flat cemetery grounds in 2015. One headstone located",
        "Rapids Cemetery Restoration Committee (City, Veterans Groups, 19th Ward CA) begins historical research, clean-up and restoration with support from 19th Ward neighbors, veterans and diverse community service groups",
        "Vegetation clearing uncovered additional headstones",
        "Native plants restored, gardens planted and outdoor amphitheater landscaped"
      ]
    }
 ];

  constructor() { }

  ngOnInit() {
  }

}
