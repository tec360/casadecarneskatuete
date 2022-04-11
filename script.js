(function(){
    var script = {
 "class": "Player",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
  "this.Container_EB83F655_FB15_07C7_41E4_BF3A9519577A",
  "this.Container_019D2ADD_15B3_06D7_41AF_4A11DAD89415",
  "this.Container_018211B7_16B3_0353_41A6_77C6C02652D4",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "scrollBarVisible": "rollOver",
 "start": "this.playAudioList([this.audio_E239635B_F55E_7899_41E2_D442B334DC93]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.Button_485BFF41_598E_3DB2_41A9_33F36E014467,this.IconButton_018281B7_16B3_0353_41B1_B87DE026CAD1], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A,this.IconButton_018241B7_16B3_0353_41AF_66F445424C50].forEach(function(component) { component.set('visible', false); }) }",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "buttonToggleMute": [
  "this.Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
  "this.IconButton_0182B1B7_16B3_0353_4195_1E5AE2ED8E80"
 ],
 "minHeight": 20,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "minWidth": 20,
 "vrPolyfillScale": 0.5,
 "backgroundPreloadEnabled": true,
 "definitions": [{
 "duration": 400,
 "to": "left",
 "id": "effect_B3C94E6D_94B1_082F_41D1_5D861E9658E5",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "duration": 400,
 "id": "effect_B77CFA6F_9491_082B_41E0_D85FC35AABCA",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "levels": [
  {
   "url": "media/popup_E2826B7D_FBF3_0DC1_41DD_B5BFE268E105_0_0.jpg",
   "width": 1400,
   "class": "ImageResourceLevel",
   "height": 675
  },
  {
   "url": "media/popup_E2826B7D_FBF3_0DC1_41DD_B5BFE268E105_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 493
  },
  {
   "url": "media/popup_E2826B7D_FBF3_0DC1_41DD_B5BFE268E105_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 246
  }
 ],
 "id": "ImageResource_E6C90A6F_FBF5_0FC3_41DD_6EE83134DB69",
 "class": "ImageResource"
},
{
 "class": "Video",
 "thumbnailUrl": "media/video_EDA777F7_FB15_04C3_41BC_E35F8824B641_t.jpg",
 "id": "video_EDA777F7_FB15_04C3_41BC_E35F8824B641",
 "width": 854,
 "loop": false,
 "scaleMode": "fit_inside",
 "label": "01",
 "height": 480,
 "video": {
  "width": 854,
  "mp4Url": "media/video_EDA777F7_FB15_04C3_41BC_E35F8824B641.mp4",
  "class": "VideoResource",
  "height": 480
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_EDCD826F_F5BD_98B9_41D9_AB9448EB0DCA_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EDCD826F_F5BD_98B9_41D9_AB9448EB0DCA_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EDCD826F_F5BD_98B9_41D9_AB9448EB0DCA_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EDCD826F_F5BD_98B9_41D9_AB9448EB0DCA_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EDCD826F_F5BD_98B9_41D9_AB9448EB0DCA_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EDCD826F_F5BD_98B9_41D9_AB9448EB0DCA_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EDCD826F_F5BD_98B9_41D9_AB9448EB0DCA_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EDCD826F_F5BD_98B9_41D9_AB9448EB0DCA_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EDCD826F_F5BD_98B9_41D9_AB9448EB0DCA_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_EDCD826F_F5BD_98B9_41D9_AB9448EB0DCA_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EDCD826F_F5BD_98B9_41D9_AB9448EB0DCA_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EDCD826F_F5BD_98B9_41D9_AB9448EB0DCA_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EDCD826F_F5BD_98B9_41D9_AB9448EB0DCA_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMax": 130,
 "hfovMin": "150%",
 "id": "panorama_EDCD826F_F5BD_98B9_41D9_AB9448EB0DCA",
 "overlays": [
  "this.overlay_E19691A5_FB1F_1D47_4199_730A8831FCF0",
  "this.overlay_E1D7A3FE_FB13_FCC2_41ED_4C154D62BC12"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_ED75AFDB_F5B2_8799_41D9_7CA2B30A10F3",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_ED3E476C_F5BD_98BF_41EA_8A634499D0C9",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_33542E36_1791_0155_41B3_43BCBCDF97CC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EDCD826F_F5BD_98B9_41D9_AB9448EB0DCA_t.jpg"
},
{
 "duration": 400,
 "id": "effect_B5F508CE_9491_086D_41E1_D7C227D4EE39",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_8B8DA8FA_9497_0834_41D5_EEF8CA41DCE2",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_112869ED_311E_0034_41C2_70A247245BB7",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_2A237CC9_317A_007D_4176_36E090D2269C",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "duration": 400,
 "id": "effect_B6DC70EB_9493_3854_41DE_A2CA859C752F",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "duration": 400,
 "id": "effect_B0F48524_9493_19DC_41CD_D6D8B0EC3851",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_8A954146_9497_385C_41BA_68B31A1C0575",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "duration": 400,
 "id": "effect_6E1D1A84_7EFC_44EC_41D2_A7D7A6578CE1",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "duration": 400,
 "id": "effect_8B839F4E_9491_086D_41C7_7BE21F22B2B4",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "class": "Video",
 "thumbnailUrl": "media/video_EC0A97A8_FB17_054D_41D5_F62C708C5452_t.jpg",
 "id": "video_EC0A97A8_FB17_054D_41D5_F62C708C5452",
 "width": 854,
 "loop": false,
 "scaleMode": "fit_inside",
 "label": "02",
 "height": 480,
 "video": {
  "width": 854,
  "mp4Url": "media/video_EC0A97A8_FB17_054D_41D5_F62C708C5452.mp4",
  "class": "VideoResource",
  "height": 480
 }
},
{
 "duration": 400,
 "id": "effect_8AB97F8A_9493_08D5_41E0_203E1AE10860",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_B27E5D6D_94B3_082C_41E1_33D169919C25",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_B48232C7_9491_185B_41DA_589BEAD8EFE7",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_ECFA4E15_F5B2_886E_41A6_F330DDBB32BA_camera"
},
{
 "duration": 400,
 "id": "effect_898428F2_9493_0835_41DD_CCF2E926B3B1",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_B625A32F_9491_382B_41B3_2E55B1C3018E",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_ED21FC13_F5B2_8869_41B1_6B82BF95CB22_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED21FC13_F5B2_8869_41B1_6B82BF95CB22_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_ED21FC13_F5B2_8869_41B1_6B82BF95CB22_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED21FC13_F5B2_8869_41B1_6B82BF95CB22_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_ED21FC13_F5B2_8869_41B1_6B82BF95CB22_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED21FC13_F5B2_8869_41B1_6B82BF95CB22_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_ED21FC13_F5B2_8869_41B1_6B82BF95CB22_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_ED21FC13_F5B2_8869_41B1_6B82BF95CB22_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED21FC13_F5B2_8869_41B1_6B82BF95CB22_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_ED21FC13_F5B2_8869_41B1_6B82BF95CB22_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED21FC13_F5B2_8869_41B1_6B82BF95CB22_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_ED21FC13_F5B2_8869_41B1_6B82BF95CB22_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED21FC13_F5B2_8869_41B1_6B82BF95CB22_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMax": 130,
 "hfovMin": "150%",
 "id": "panorama_ED21FC13_F5B2_8869_41B1_6B82BF95CB22",
 "overlays": [
  "this.overlay_EE4D6C77_FB0D_0BC3_41DD_95AC0B41B5D0",
  "this.overlay_EFA9867B_FB0D_07C3_41E5_E44BC4557B3F",
  "this.overlay_EC7353B5_FB12_FD47_41B9_E7E4ABA7F673"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_ECAC2502_F5BD_B86B_41B7_127BAEEE0A8A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_ED75AFDB_F5B2_8799_41D9_7CA2B30A10F3",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_ECBFBCA8_F5B2_89A7_41A6_0F088CC563EA",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_EDB861D0_F5B2_7BE7_41A6_858756CFD416",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_33542E36_1791_0155_41B3_43BCBCDF97CC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_ED21FC13_F5B2_8869_41B1_6B82BF95CB22_t.jpg"
},
{
 "duration": 400,
 "id": "effect_4983BDE0_570B_E541_41B3_32D6394D0ACC",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_8BFC2468_9491_1854_41BF_A5CC5585CF55",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "duration": 400,
 "id": "effect_B265A3B0_94B3_3834_41D1_12F31D8BFE52",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "duration": 400,
 "id": "effect_B6F65D40_9493_0854_41D3_91100B2C991E",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "class": "PopupPanoramaOverlay",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_E2826B7D_FBF3_0DC1_41DD_B5BFE268E105",
 "hfov": 18.16,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "popupDistance": 100,
 "image": {
  "levels": [
   {
    "url": "media/popup_E2826B7D_FBF3_0DC1_41DD_B5BFE268E105_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 493
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -32.66,
 "hideEasing": "cubic_out",
 "yaw": -24.01
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_2EF4EDF2_311A_002F_41B7_7476A5CB22BB",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "class": "PopupPanoramaOverlay",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_E302125F_FBF3_3FC2_41EB_15AE7257F60C",
 "hfov": 4.97,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "popupDistance": 100,
 "image": {
  "levels": [
   {
    "url": "media/popup_E302125F_FBF3_3FC2_41EB_15AE7257F60C_0_0.jpg",
    "width": 188,
    "class": "ImageResourceLevel",
    "height": 269
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 30.35,
 "hideEasing": "cubic_out",
 "yaw": -44.72
},
{
 "duration": 400,
 "id": "effect_B67B571B_9491_79F4_41E0_0469A8275BE5",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_8B6AABCE_9491_086D_41E0_5DCDB3CA3E52",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_B66FC25B_9491_186B_41DD_042FBA348796",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_B22B4AA8_94B3_08D5_41E0_E23ACF2CDC21",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "initialPosition": {
  "yaw": -51.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_33240EE5_1791_1EF7_41A7_40B100431F80"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_2C352674_3AA1_EE57_41A1_BD5B5FE304A0",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_8AE5EAF6_9491_083D_41DB_CA2F71BBCDC1",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_8B6C9DB3_949F_083B_41CD_C9D467FE2549",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "initialPosition": {
  "yaw": 133.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_33387EFE_1791_1ED4_418A_2840CC955879"
},
{
 "duration": 400,
 "id": "effect_B5BD2D9B_9493_08F4_41C4_412B2FF594B4",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "duration": 400,
 "id": "effect_B5454E96_9491_08FD_41E1_00E88377BCE3",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "duration": 400,
 "id": "effect_B626EB76_9493_083A_41E0_3863BFDE65E0",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_B568C9B2_9491_0835_41E0_7C027FD6DCB1",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "duration": 400,
 "id": "effect_B1670F28_94B1_09D5_41A1_2C5A4ED7D4DC",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "duration": 400,
 "id": "effect_B0BB10AF_9491_182C_41B8_D3118E6F2E91",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "duration": 400,
 "id": "effect_898D54CF_9493_386B_41C9_EE8C51220E79",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_ED75AFDB_F5B2_8799_41D9_7CA2B30A10F3_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED75AFDB_F5B2_8799_41D9_7CA2B30A10F3_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_ED75AFDB_F5B2_8799_41D9_7CA2B30A10F3_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED75AFDB_F5B2_8799_41D9_7CA2B30A10F3_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_ED75AFDB_F5B2_8799_41D9_7CA2B30A10F3_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED75AFDB_F5B2_8799_41D9_7CA2B30A10F3_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_ED75AFDB_F5B2_8799_41D9_7CA2B30A10F3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_ED75AFDB_F5B2_8799_41D9_7CA2B30A10F3_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED75AFDB_F5B2_8799_41D9_7CA2B30A10F3_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_ED75AFDB_F5B2_8799_41D9_7CA2B30A10F3_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED75AFDB_F5B2_8799_41D9_7CA2B30A10F3_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_ED75AFDB_F5B2_8799_41D9_7CA2B30A10F3_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED75AFDB_F5B2_8799_41D9_7CA2B30A10F3_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMax": 130,
 "hfovMin": "150%",
 "id": "panorama_ED75AFDB_F5B2_8799_41D9_7CA2B30A10F3",
 "overlays": [
  "this.overlay_E3DD8238_FB0D_1F4D_41D8_E1F1EDA6B3DD",
  "this.overlay_EC4CED2E_FBF5_0545_41E7_460F130202C1",
  "this.overlay_EC68D8A0_FBF5_0B7D_41EC_BBA776F22E74",
  "this.popup_E2826B7D_FBF3_0DC1_41DD_B5BFE268E105",
  "this.overlay_E34DC1D3_FB0D_3CC3_41CF_9A1CF3866BF2"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 155.57,
   "class": "AdjacentPanorama",
   "backwardYaw": 128.64,
   "panorama": "this.panorama_ECAC2502_F5BD_B86B_41B7_127BAEEE0A8A",
   "distance": 1
  },
  {
   "panorama": "this.panorama_ECFA4E15_F5B2_886E_41A6_F330DDBB32BA",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -150.45,
   "class": "AdjacentPanorama",
   "backwardYaw": -46.56,
   "panorama": "this.panorama_ED3E476C_F5BD_98BF_41EA_8A634499D0C9",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_33542E36_1791_0155_41B3_43BCBCDF97CC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_ED75AFDB_F5B2_8799_41D9_7CA2B30A10F3_t.jpg"
},
{
 "displayOriginPosition": {
  "yaw": 0,
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "stereographicFactor": 1,
  "pitch": -90
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_ECD0F56A_F5B5_98BB_41EB_05FC617F648E_camera",
 "displayMovements": [
  {
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "targetPitch": 0,
   "duration": 3000,
   "targetStereographicFactor": 0,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "cubic_in_out"
  }
 ]
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_B481A4D6_9491_387D_41CF_8034E66B72D2",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "initialPosition": {
  "yaw": 29.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_30CD4F18_1791_1F5D_41B0_BC6836093A6B"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_2A207F1A_3106_001F_41C1_5AE5FDDFBEDD",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_6F6D4344_7EFD_C463_41DC_2E289C95FE19",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_6F36D593_7EFC_4CE4_41C0_C765037E8ABF",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "initialPosition": {
  "yaw": 150.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_33067E94_1791_0155_41B6_6EDBB5C4C1F7"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_B24695C0_94B1_F855_41D9_964355EF2B59",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_ED75AFDB_F5B2_8799_41D9_7CA2B30A10F3_camera"
},
{
 "horizontalAlign": "center",
 "id": "window_EC8166CF_FB17_04C3_41A0_EF9B1044A7B1",
 "backgroundOpacity": 1,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "width": 400,
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "titleFontColor": "#000000",
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "minHeight": 20,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "modal": true,
 "propagateClick": false,
 "headerBorderColor": "#000000",
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "title": "",
 "height": 600,
 "bodyBackgroundOpacity": 0,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "minWidth": 20,
 "footerHeight": 5,
 "headerPaddingRight": 0,
 "shadow": true,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 3,
 "headerBackgroundOpacity": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "shadowBlurRadius": 6,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "class": "Window",
 "bodyPaddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderRadius": 11,
 "children": [
  "this.viewer_uid3341FE28_1791_017C_41B0_DDE55ABDD072"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonRollOverIconColor": "#FFFFFF",
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 5,
 "footerBackgroundOpacity": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [],
 "shadowHorizontalLength": 3,
 "gap": 10,
 "paddingTop": 0,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#B2B2B2",
 "bodyPaddingBottom": 0,
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 0,
 "closeButtonBackgroundColor": [],
 "data": {
  "name": "Window22116"
 },
 "shadowSpread": 1,
 "headerBackgroundColorDirection": "vertical",
 "titleFontFamily": "Arial"
},
{
 "duration": 400,
 "id": "effect_19F0E9E8_310A_003B_41C2_00E6E4570ABD",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_B59EA966_9497_085D_41D4_CC23D3789789",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "duration": 400,
 "id": "effect_B59FFEE6_9491_085D_41D5_8F74C477CA80",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_B7CA2CC3_9491_085B_41C6_518E9C84FB66",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_B539B4C7_9491_185C_419E_962527A957FB",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_ECDCDE8F_F5B2_8879_41EA_5B8811ED30B1_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECDCDE8F_F5B2_8879_41EA_5B8811ED30B1_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_ECDCDE8F_F5B2_8879_41EA_5B8811ED30B1_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECDCDE8F_F5B2_8879_41EA_5B8811ED30B1_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_ECDCDE8F_F5B2_8879_41EA_5B8811ED30B1_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECDCDE8F_F5B2_8879_41EA_5B8811ED30B1_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_ECDCDE8F_F5B2_8879_41EA_5B8811ED30B1_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_ECDCDE8F_F5B2_8879_41EA_5B8811ED30B1_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECDCDE8F_F5B2_8879_41EA_5B8811ED30B1_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_ECDCDE8F_F5B2_8879_41EA_5B8811ED30B1_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECDCDE8F_F5B2_8879_41EA_5B8811ED30B1_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_ECDCDE8F_F5B2_8879_41EA_5B8811ED30B1_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECDCDE8F_F5B2_8879_41EA_5B8811ED30B1_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMax": 130,
 "hfovMin": "150%",
 "id": "panorama_ECDCDE8F_F5B2_8879_41EA_5B8811ED30B1",
 "overlays": [
  "this.overlay_EE026596_FB0D_0545_41BC_4063DCD14555"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 97.74,
   "class": "AdjacentPanorama",
   "backwardYaw": -92.59,
   "panorama": "this.panorama_ECFA4E15_F5B2_886E_41A6_F330DDBB32BA",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_33542E36_1791_0155_41B3_43BCBCDF97CC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_ECDCDE8F_F5B2_8879_41EA_5B8811ED30B1_t.jpg"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_8A2EDCC6_949F_085D_41C7_FD6618A3A0DE",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_6E417DE0_7EFD_DC24_41C1_9DAD95E670ED",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "items": [
  {
   "media": "this.video_EC0A97A8_FB17_054D_41D5_F62C708C5452",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3341FE28_1791_017C_41B0_DDE55ABDD072VideoPlayer)",
   "player": "this.viewer_uid3341FE28_1791_017C_41B0_DDE55ABDD072VideoPlayer",
   "start": "this.viewer_uid3341FE28_1791_017C_41B0_DDE55ABDD072VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_1E86CD58_157F_03DC_41A2_DA238F7EC0C9, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_1E86CD58_157F_03DC_41A2_DA238F7EC0C9, 0)"
  }
 ],
 "id": "playList_1E86CD58_157F_03DC_41A2_DA238F7EC0C9",
 "class": "PlayList"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_88058052_9491_F874_41C8_DB3349E1BEE1",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "duration": 400,
 "id": "effect_1836A9FB_310E_001D_41C1_0750F03CB784",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "duration": 400,
 "id": "effect_B408C7EA_9491_7855_41DD_127E3B34D959",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "duration": 400,
 "id": "effect_18BBC752_310E_006C_41B5_0D8B802FB057",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "duration": 400,
 "id": "effect_B6258D2F_9491_082B_41DE_9AF337AA3DF5",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "duration": 400,
 "id": "effect_B34BF78D_94B1_F8EC_41CF_9FD95971A634",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_B0C95277_9493_783C_41D6_8FAD5310A7B0",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_ECD0F56A_F5B5_98BB_41EB_05FC617F648E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECD0F56A_F5B5_98BB_41EB_05FC617F648E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_ECD0F56A_F5B5_98BB_41EB_05FC617F648E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECD0F56A_F5B5_98BB_41EB_05FC617F648E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_ECD0F56A_F5B5_98BB_41EB_05FC617F648E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_ECD0F56A_F5B5_98BB_41EB_05FC617F648E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECD0F56A_F5B5_98BB_41EB_05FC617F648E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_ECD0F56A_F5B5_98BB_41EB_05FC617F648E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECD0F56A_F5B5_98BB_41EB_05FC617F648E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_ECD0F56A_F5B5_98BB_41EB_05FC617F648E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECD0F56A_F5B5_98BB_41EB_05FC617F648E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_ECD0F56A_F5B5_98BB_41EB_05FC617F648E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECD0F56A_F5B5_98BB_41EB_05FC617F648E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMax": 130,
 "hfovMin": "150%",
 "id": "panorama_ECD0F56A_F5B5_98BB_41EB_05FC617F648E",
 "overlays": [
  "this.overlay_EE43DD0C_F5B6_887E_41C9_9AFCF3EF8099",
  "this.overlay_E4E0ABEB_FB0D_0CC3_41EA_78D793D1F7EA",
  "this.panorama_ECD0F56A_F5B5_98BB_41EB_05FC617F648E_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_ECFA4E15_F5B2_886E_41A6_F330DDBB32BA",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_33542E36_1791_0155_41B3_43BCBCDF97CC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_ECD0F56A_F5B5_98BB_41EB_05FC617F648E_t.jpg"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_ECBFBCA8_F5B2_89A7_41A6_0F088CC563EA_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECBFBCA8_F5B2_89A7_41A6_0F088CC563EA_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_ECBFBCA8_F5B2_89A7_41A6_0F088CC563EA_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECBFBCA8_F5B2_89A7_41A6_0F088CC563EA_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_ECBFBCA8_F5B2_89A7_41A6_0F088CC563EA_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECBFBCA8_F5B2_89A7_41A6_0F088CC563EA_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_ECBFBCA8_F5B2_89A7_41A6_0F088CC563EA_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_ECBFBCA8_F5B2_89A7_41A6_0F088CC563EA_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECBFBCA8_F5B2_89A7_41A6_0F088CC563EA_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_ECBFBCA8_F5B2_89A7_41A6_0F088CC563EA_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECBFBCA8_F5B2_89A7_41A6_0F088CC563EA_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_ECBFBCA8_F5B2_89A7_41A6_0F088CC563EA_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECBFBCA8_F5B2_89A7_41A6_0F088CC563EA_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMax": 130,
 "hfovMin": "150%",
 "id": "panorama_ECBFBCA8_F5B2_89A7_41A6_0F088CC563EA",
 "overlays": [
  "this.overlay_EDE31181_FB13_1D3F_41C9_BCB4EFE6F4AB",
  "this.overlay_E3B52DB3_FBFF_0543_41BC_E0D7C021F24E",
  "this.overlay_EC73C1E3_FBFF_1CC3_41BD_8EDB148FEAC6",
  "this.popup_E302125F_FBF3_3FC2_41EB_15AE7257F60C",
  "this.overlay_E32918AC_FBF3_0B45_41ED_62B1C5DF1883",
  "this.overlay_E3C79274_FBF5_1FC5_41A5_53FCDA93DCD4",
  "this.popup_E33D9636_FBF7_0745_41BD_CC82C0786306",
  "this.overlay_E30CA34C_FB13_3DC5_41D2_9D99BADC1983"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_EDCD826F_F5BD_98B9_41D9_AB9448EB0DCA",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_ED75AFDB_F5B2_8799_41D9_7CA2B30A10F3",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_33542E36_1791_0155_41B3_43BCBCDF97CC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_ECBFBCA8_F5B2_89A7_41A6_0F088CC563EA_t.jpg"
},
{
 "duration": 400,
 "id": "effect_6C4FA978_7EFC_C424_41DA_519605965466",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "duration": 400,
 "id": "effect_1622AA86_310A_00F4_41A8_DBA0885BA83A",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "duration": 400,
 "id": "effect_268FAF4D_310E_0075_4179_B2B3CFC7C47E",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "duration": 400,
 "id": "effect_B60AE61B_9491_3BF4_41DF_19C7BF97DFF0",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_B3F4D89D_94B1_08EC_41A7_AA127AB48C60",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "duration": 400,
 "id": "effect_6C9A8F04_7EFC_7DEC_4197_07A12DF6DE72",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_B6EA9E07_9491_0BDC_41D3_3F6AD3783ABE",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_897E419E_9497_78EC_41C6_F0A57FA56749",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "initialPosition": {
  "yaw": -9.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_332F5ECA_1791_013C_41B4_FD802D90ED54"
},
{
 "duration": 400,
 "id": "effect_B64D30CB_9491_386B_41DA_342B819E43AC",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EDCD826F_F5BD_98B9_41D9_AB9448EB0DCA_camera"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_B65E46AF_9493_182B_41DF_8471ED8FC98E",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "initialPosition": {
  "yaw": -82.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_331A8EAC_1791_0175_419C_0DB72201A699"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_ECBFBCA8_F5B2_89A7_41A6_0F088CC563EA_camera"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_B0859FF2_9493_0835_41DA_F4FB89B321BF",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_49353574_570C_A542_41D0_43B05AC58F9B",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_B482C092_9491_18F5_41DA_C54078523BC0",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "items": [
  {
   "media": "this.panorama_ECD0F56A_F5B5_98BB_41EB_05FC617F648E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_ECD0F56A_F5B5_98BB_41EB_05FC617F648E_camera"
  },
  {
   "media": "this.panorama_ECFA4E15_F5B2_886E_41A6_F330DDBB32BA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_ECFA4E15_F5B2_886E_41A6_F330DDBB32BA_camera"
  },
  {
   "media": "this.panorama_ECDCDE8F_F5B2_8879_41EA_5B8811ED30B1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_ECDCDE8F_F5B2_8879_41EA_5B8811ED30B1_camera"
  },
  {
   "media": "this.panorama_ECAC2502_F5BD_B86B_41B7_127BAEEE0A8A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_ECAC2502_F5BD_B86B_41B7_127BAEEE0A8A_camera"
  },
  {
   "media": "this.panorama_ED21FC13_F5B2_8869_41B1_6B82BF95CB22",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_ED21FC13_F5B2_8869_41B1_6B82BF95CB22_camera"
  },
  {
   "media": "this.panorama_ED75AFDB_F5B2_8799_41D9_7CA2B30A10F3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_ED75AFDB_F5B2_8799_41D9_7CA2B30A10F3_camera"
  },
  {
   "media": "this.panorama_ECBFBCA8_F5B2_89A7_41A6_0F088CC563EA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_ECBFBCA8_F5B2_89A7_41A6_0F088CC563EA_camera"
  },
  {
   "media": "this.panorama_ED3E476C_F5BD_98BF_41EA_8A634499D0C9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_ED3E476C_F5BD_98BF_41EA_8A634499D0C9_camera"
  },
  {
   "media": "this.panorama_EDB861D0_F5B2_7BE7_41A6_858756CFD416",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EDB861D0_F5B2_7BE7_41A6_858756CFD416_camera"
  },
  {
   "media": "this.panorama_EDCD826F_F5BD_98B9_41D9_AB9448EB0DCA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EDCD826F_F5BD_98B9_41D9_AB9448EB0DCA_camera"
  },
  {
   "media": "this.video_EDA777F7_FB15_04C3_41BC_E35F8824B641",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerVideoPlayer",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10)"
  },
  {
   "media": "this.video_EC0A97A8_FB17_054D_41D5_F62C708C5452",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 0)",
   "player": "this.MainViewerVideoPlayer",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11)"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_8822E8AA_9497_08D5_4174_26CC5E1E4686",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "duration": 400,
 "id": "effect_BCBF1381_94B1_18D4_41DA_F5BC32E00C21",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_899FD635_9491_183F_41D0_7002C81DFC77",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "duration": 400,
 "id": "effect_89C6CE9B_9493_08F4_41D0_6FC7289F89C4",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "duration": 400,
 "id": "effect_B4FDAC36_9491_083D_41E1_7356505AC888",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_ED3E476C_F5BD_98BF_41EA_8A634499D0C9_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED3E476C_F5BD_98BF_41EA_8A634499D0C9_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_ED3E476C_F5BD_98BF_41EA_8A634499D0C9_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED3E476C_F5BD_98BF_41EA_8A634499D0C9_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_ED3E476C_F5BD_98BF_41EA_8A634499D0C9_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED3E476C_F5BD_98BF_41EA_8A634499D0C9_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_ED3E476C_F5BD_98BF_41EA_8A634499D0C9_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_ED3E476C_F5BD_98BF_41EA_8A634499D0C9_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED3E476C_F5BD_98BF_41EA_8A634499D0C9_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_ED3E476C_F5BD_98BF_41EA_8A634499D0C9_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED3E476C_F5BD_98BF_41EA_8A634499D0C9_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_ED3E476C_F5BD_98BF_41EA_8A634499D0C9_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED3E476C_F5BD_98BF_41EA_8A634499D0C9_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMax": 130,
 "hfovMin": "150%",
 "id": "panorama_ED3E476C_F5BD_98BF_41EA_8A634499D0C9",
 "overlays": [
  "this.overlay_ED1F2F3E_FB1F_0545_41DC_5DDCEF38DE69",
  "this.overlay_ED9A6BAE_FB1D_0D45_41EA_CA128953F0EC",
  "this.overlay_EDCD5063_FB13_7BC3_41D9_90B0F9561027",
  "this.overlay_EC50A4C3_FB15_04C3_41D0_2584E26B5DA1",
  "this.overlay_EC676F7E_FB13_05C2_41EC_BA05C237493B",
  "this.overlay_EC4D665E_FB0F_07C5_41E3_B3DB9FAB00FD"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -46.56,
   "class": "AdjacentPanorama",
   "backwardYaw": -150.45,
   "panorama": "this.panorama_ED75AFDB_F5B2_8799_41D9_7CA2B30A10F3",
   "distance": 1
  },
  {
   "panorama": "this.panorama_ECBFBCA8_F5B2_89A7_41A6_0F088CC563EA",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_33542E36_1791_0155_41B3_43BCBCDF97CC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_ED3E476C_F5BD_98BF_41EA_8A634499D0C9_t.jpg"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_B70347B8_9491_1834_41C3_6D356CC569AB",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_B21F8580_94B3_18D5_41C5_19BFB320DA74",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_B6899F1B_9497_09EB_41D0_1592754F094F",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_B7830787_9493_38DB_41DB_A8E9E94D0517",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_18885C2A_310A_003C_41B2_9B60A3A66C9F",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "duration": 400,
 "id": "effect_B1CE741F_9493_3FEB_41CC_345874C16FAD",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "duration": 400,
 "id": "effect_6F934347_7EFD_C46C_41CD_98E4D1803E93",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_8AEC3735_9491_383F_41E0_CF7CBACF3F83",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "duration": 400,
 "id": "effect_163FEAB2_310E_002C_416A_B20913F49C44",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "class": "PopupPanoramaOverlay",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_E33D9636_FBF7_0745_41BD_CC82C0786306",
 "hfov": 8.17,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "popupDistance": 100,
 "image": {
  "levels": [
   {
    "url": "media/popup_E33D9636_FBF7_0745_41BD_CC82C0786306_0_0.jpg",
    "width": 600,
    "class": "ImageResourceLevel",
    "height": 422
   },
   {
    "url": "media/popup_E33D9636_FBF7_0745_41BD_CC82C0786306_0_1.jpg",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 360
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 17.01,
 "hideEasing": "cubic_out",
 "yaw": -13.87
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_B02F7E6B_9491_082B_41CC_A3B8AE1814DE",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "buttonToggleGyroscope": [
  "this.Button_485BFF41_598E_3DB2_41A9_33F36E014467",
  "this.IconButton_018281B7_16B3_0353_41B1_B87DE026CAD1"
 ],
 "class": "PanoramaPlayer",
 "buttonCardboardView": [
  "this.Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
  "this.IconButton_018291B7_16B3_0353_418A_384BA65FFE7E"
 ],
 "touchControlMode": "drag_rotation",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "buttonToggleHotspots": [
  "this.Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
  "this.IconButton_018251B7_16B3_0353_41B5_035CC8E48FE2"
 ],
 "mouseControlMode": "drag_acceleration",
 "displayPlaybackBar": true
},
{
 "duration": 400,
 "id": "effect_896FA3EA_9493_3854_41BE_C6AF134EA53D",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "duration": 400,
 "id": "effect_8BAF5302_9493_39D5_41C8_B519ABDBC4E9",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_ECDCDE8F_F5B2_8879_41EA_5B8811ED30B1_camera"
},
{
 "duration": 400,
 "id": "effect_8A231913_9493_09FB_41D0_61CBD047CA49",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "duration": 400,
 "id": "effect_B176C187_94B3_18DC_41DD_86A1B3A6D16A",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "initialPosition": {
  "yaw": 87.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_30C09F31_1791_1F6F_416A_C69514903799"
},
{
 "duration": 400,
 "id": "effect_B3554030_94B1_3834_41C9_475DE0CD0469",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "items": [
  {
   "media": "this.panorama_ECD0F56A_F5B5_98BB_41EB_05FC617F648E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_ECD0F56A_F5B5_98BB_41EB_05FC617F648E_camera"
  },
  {
   "media": "this.panorama_ECFA4E15_F5B2_886E_41A6_F330DDBB32BA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_ECFA4E15_F5B2_886E_41A6_F330DDBB32BA_camera"
  },
  {
   "media": "this.panorama_ECDCDE8F_F5B2_8879_41EA_5B8811ED30B1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_ECDCDE8F_F5B2_8879_41EA_5B8811ED30B1_camera"
  },
  {
   "media": "this.panorama_ECAC2502_F5BD_B86B_41B7_127BAEEE0A8A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_ECAC2502_F5BD_B86B_41B7_127BAEEE0A8A_camera"
  },
  {
   "media": "this.panorama_ED21FC13_F5B2_8869_41B1_6B82BF95CB22",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_ED21FC13_F5B2_8869_41B1_6B82BF95CB22_camera"
  },
  {
   "media": "this.panorama_ED75AFDB_F5B2_8799_41D9_7CA2B30A10F3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_ED75AFDB_F5B2_8799_41D9_7CA2B30A10F3_camera"
  },
  {
   "media": "this.panorama_ECBFBCA8_F5B2_89A7_41A6_0F088CC563EA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_ECBFBCA8_F5B2_89A7_41A6_0F088CC563EA_camera"
  },
  {
   "media": "this.panorama_ED3E476C_F5BD_98BF_41EA_8A634499D0C9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_ED3E476C_F5BD_98BF_41EA_8A634499D0C9_camera"
  },
  {
   "media": "this.panorama_EDB861D0_F5B2_7BE7_41A6_858756CFD416",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EDB861D0_F5B2_7BE7_41A6_858756CFD416_camera"
  },
  {
   "media": "this.panorama_EDCD826F_F5BD_98B9_41D9_AB9448EB0DCA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EDCD826F_F5BD_98B9_41D9_AB9448EB0DCA_camera"
  },
  {
   "media": "this.video_EDA777F7_FB15_04C3_41BC_E35F8824B641",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerVideoPlayer",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 10, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 10)"
  },
  {
   "media": "this.video_EC0A97A8_FB17_054D_41D5_F62C708C5452",
   "end": "this.trigger('tourEnded')",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 11, 0)",
   "player": "this.MainViewerVideoPlayer",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 11, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 11)"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "duration": 400,
 "id": "effect_B58F2C4F_9491_086B_41C6_A8369D9E7FB0",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_ECAC2502_F5BD_B86B_41B7_127BAEEE0A8A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECAC2502_F5BD_B86B_41B7_127BAEEE0A8A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_ECAC2502_F5BD_B86B_41B7_127BAEEE0A8A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECAC2502_F5BD_B86B_41B7_127BAEEE0A8A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_ECAC2502_F5BD_B86B_41B7_127BAEEE0A8A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECAC2502_F5BD_B86B_41B7_127BAEEE0A8A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_ECAC2502_F5BD_B86B_41B7_127BAEEE0A8A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_ECAC2502_F5BD_B86B_41B7_127BAEEE0A8A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECAC2502_F5BD_B86B_41B7_127BAEEE0A8A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_ECAC2502_F5BD_B86B_41B7_127BAEEE0A8A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECAC2502_F5BD_B86B_41B7_127BAEEE0A8A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_ECAC2502_F5BD_B86B_41B7_127BAEEE0A8A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECAC2502_F5BD_B86B_41B7_127BAEEE0A8A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMax": 130,
 "hfovMin": "150%",
 "id": "panorama_ECAC2502_F5BD_B86B_41B7_127BAEEE0A8A",
 "overlays": [
  "this.overlay_EFB448C7_FB0F_0CC2_41E1_5A09F5EF16BD",
  "this.overlay_EEEDD3B2_FB0F_1D5D_41D1_B4766F82379F"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 128.64,
   "class": "AdjacentPanorama",
   "backwardYaw": 155.57,
   "panorama": "this.panorama_ED75AFDB_F5B2_8799_41D9_7CA2B30A10F3",
   "distance": 1
  },
  {
   "yaw": 170.35,
   "class": "AdjacentPanorama",
   "backwardYaw": -29.61,
   "panorama": "this.panorama_ECFA4E15_F5B2_886E_41A6_F330DDBB32BA",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_33542E36_1791_0155_41B3_43BCBCDF97CC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_ECAC2502_F5BD_B86B_41B7_127BAEEE0A8A_t.jpg"
},
{
 "duration": 400,
 "id": "effect_8AA69BBF_9491_082C_419F_18F08AED488F",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_27C1F008_310D_FFFB_41A2_B5C1794EE5C9",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_ED3E476C_F5BD_98BF_41EA_8A634499D0C9_camera"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_E239635B_F55E_7899_41E2_D442B334DC93.ogg",
  "mp3Url": "media/audio_E239635B_F55E_7899_41E2_D442B334DC93.mp3"
 },
 "id": "audio_E239635B_F55E_7899_41E2_D442B334DC93",
 "data": {
  "label": "Recairei - Os Bar\u00f5es da"
 }
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_B3FEF8A1_94B1_08D4_41E1_B824963794F5",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_B04E5807_9491_17DB_41DC_E77570FB08FA",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_ECAC2502_F5BD_B86B_41B7_127BAEEE0A8A_camera"
},
{
 "duration": 400,
 "id": "effect_49B5BB1B_570B_6EC6_41BA_9E76A2F95A16",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_EDB861D0_F5B2_7BE7_41A6_858756CFD416_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EDB861D0_F5B2_7BE7_41A6_858756CFD416_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EDB861D0_F5B2_7BE7_41A6_858756CFD416_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EDB861D0_F5B2_7BE7_41A6_858756CFD416_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EDB861D0_F5B2_7BE7_41A6_858756CFD416_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EDB861D0_F5B2_7BE7_41A6_858756CFD416_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EDB861D0_F5B2_7BE7_41A6_858756CFD416_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EDB861D0_F5B2_7BE7_41A6_858756CFD416_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EDB861D0_F5B2_7BE7_41A6_858756CFD416_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_EDB861D0_F5B2_7BE7_41A6_858756CFD416_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EDB861D0_F5B2_7BE7_41A6_858756CFD416_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EDB861D0_F5B2_7BE7_41A6_858756CFD416_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EDB861D0_F5B2_7BE7_41A6_858756CFD416_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMax": 130,
 "hfovMin": "150%",
 "id": "panorama_EDB861D0_F5B2_7BE7_41A6_858756CFD416",
 "overlays": [
  "this.overlay_E2C5C179_FB15_1DCE_41E2_98F886449259",
  "this.overlay_E378E8CC_FB15_0CC5_41D6_C066C7EC444D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_ED75AFDB_F5B2_8799_41D9_7CA2B30A10F3",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_ECBFBCA8_F5B2_89A7_41A6_0F088CC563EA",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_33542E36_1791_0155_41B3_43BCBCDF97CC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EDB861D0_F5B2_7BE7_41A6_858756CFD416_t.jpg"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_6F0C2178_7EF3_C424_41DB_BFCD7CE82F8B",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "horizontalAlign": "center",
 "id": "window_EC17D391_FB17_7D5F_41E4_25F2D52C5B12",
 "backgroundOpacity": 1,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "width": 400,
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "titleFontColor": "#000000",
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "minHeight": 20,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "modal": true,
 "propagateClick": false,
 "headerBorderColor": "#000000",
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "title": "",
 "height": 600,
 "bodyBackgroundOpacity": 0,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "minWidth": 20,
 "footerHeight": 5,
 "headerPaddingRight": 0,
 "shadow": true,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 3,
 "headerBackgroundOpacity": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "shadowBlurRadius": 6,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "class": "Window",
 "bodyPaddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderRadius": 11,
 "children": [
  "this.viewer_uid33423E26_1791_0174_41A4_44DCE0E3A50E"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonRollOverIconColor": "#FFFFFF",
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 5,
 "footerBackgroundOpacity": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [],
 "shadowHorizontalLength": 3,
 "gap": 10,
 "paddingTop": 0,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#B2B2B2",
 "bodyPaddingBottom": 0,
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 0,
 "closeButtonBackgroundColor": [],
 "data": {
  "name": "Window22886"
 },
 "shadowSpread": 1,
 "headerBackgroundColorDirection": "vertical",
 "titleFontFamily": "Arial"
},
{
 "duration": 400,
 "id": "effect_8A1C3F2A_949F_09D5_41E0_2D8A6911EDE7",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_8A79E75A_949F_1874_41DB_B8859D03684A",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "duration": 400,
 "id": "effect_B1D80C9F_9491_08EB_41DD_FC28B6347ECB",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "duration": 400,
 "id": "effect_8B6A412F_949F_382C_41D0_B8EAABFD42EC",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_164A1542_310E_006C_41C8_B7C2AB9D709D",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "duration": 400,
 "id": "effect_1A65691F_310E_0014_41BF_C2605660352F",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "duration": 400,
 "id": "effect_8B815542_9491_1855_41DA_0BE52A4755F9",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_ECFA4E15_F5B2_886E_41A6_F330DDBB32BA_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECFA4E15_F5B2_886E_41A6_F330DDBB32BA_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_ECFA4E15_F5B2_886E_41A6_F330DDBB32BA_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECFA4E15_F5B2_886E_41A6_F330DDBB32BA_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_ECFA4E15_F5B2_886E_41A6_F330DDBB32BA_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECFA4E15_F5B2_886E_41A6_F330DDBB32BA_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_ECFA4E15_F5B2_886E_41A6_F330DDBB32BA_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_ECFA4E15_F5B2_886E_41A6_F330DDBB32BA_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECFA4E15_F5B2_886E_41A6_F330DDBB32BA_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_ECFA4E15_F5B2_886E_41A6_F330DDBB32BA_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECFA4E15_F5B2_886E_41A6_F330DDBB32BA_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_ECFA4E15_F5B2_886E_41A6_F330DDBB32BA_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ECFA4E15_F5B2_886E_41A6_F330DDBB32BA_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMax": 130,
 "hfovMin": "150%",
 "id": "panorama_ECFA4E15_F5B2_886E_41A6_F330DDBB32BA",
 "overlays": [
  "this.overlay_EF6BCBBD_FB35_0D47_41E3_E018CF5B452F",
  "this.overlay_EE34C12C_FB35_FD46_41B9_D803BB2F1C1B",
  "this.overlay_EFACB606_FB35_0745_4199_CAB6E43BF99E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -92.59,
   "class": "AdjacentPanorama",
   "backwardYaw": 97.74,
   "panorama": "this.panorama_ECDCDE8F_F5B2_8879_41EA_5B8811ED30B1",
   "distance": 1
  },
  {
   "yaw": -29.61,
   "class": "AdjacentPanorama",
   "backwardYaw": 170.35,
   "panorama": "this.panorama_ECAC2502_F5BD_B86B_41B7_127BAEEE0A8A",
   "distance": 1
  },
  {
   "panorama": "this.panorama_ED21FC13_F5B2_8869_41B1_6B82BF95CB22",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_33542E36_1791_0155_41B3_43BCBCDF97CC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_ECFA4E15_F5B2_886E_41A6_F330DDBB32BA_t.jpg"
},
{
 "initialPosition": {
  "yaw": -24.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_330E4E7A_1791_01DC_41B1_5208A3F6F44A"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_B3CF3F9D_94B1_08EC_41D9_E24CD7733252",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EDB861D0_F5B2_7BE7_41A6_858756CFD416_camera"
},
{
 "duration": 400,
 "id": "effect_B44B5EBB_9497_082B_41D8_6A78A8A73A6D",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_ED21FC13_F5B2_8869_41B1_6B82BF95CB22_camera"
},
{
 "duration": 400,
 "id": "effect_B34A3F38_94B1_0834_41DF_0359CC70247E",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "duration": 400,
 "id": "effect_B328B944_94B1_085D_41D2_100952628A44",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "items": [
  {
   "media": "this.video_EDA777F7_FB15_04C3_41BC_E35F8824B641",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid33423E26_1791_0174_41A4_44DCE0E3A50EVideoPlayer)",
   "player": "this.viewer_uid33423E26_1791_0174_41A4_44DCE0E3A50EVideoPlayer",
   "start": "this.viewer_uid33423E26_1791_0174_41A4_44DCE0E3A50EVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_1E84DD54_157F_03D5_41A3_70D870BA1CDA, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_1E84DD54_157F_03D5_41A3_70D870BA1CDA, 0)"
  }
 ],
 "id": "playList_1E84DD54_157F_03D5_41A3_70D870BA1CDA",
 "class": "PlayList"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_B798BAF7_9491_083B_41E0_72A7199D0D31",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_B681F4A4_9491_78DD_41E2_5B76E3856C13",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "fontColor": "#FFFFFF",
 "class": "Menu",
 "children": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "MenuItem"
  },
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "MenuItem"
  },
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "MenuItem"
  },
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "MenuItem"
  },
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "MenuItem"
  },
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "MenuItem"
  },
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "MenuItem"
  },
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "MenuItem"
  },
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "MenuItem"
  },
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "MenuItem"
  }
 ],
 "label": "Media",
 "rollOverBackgroundColor": "#000000",
 "id": "Menu_33542E36_1791_0155_41B3_43BCBCDF97CC",
 "opacity": 0.4,
 "fontFamily": "Arial",
 "selectedFontColor": "#FFFFFF",
 "rollOverOpacity": 0.8,
 "selectedBackgroundColor": "#202020",
 "backgroundColor": "#404040",
 "rollOverFontColor": "#FFFFFF"
},
{
 "duration": 400,
 "id": "effect_B09A4863_9491_0854_41D5_538F6C41E041",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Georgia",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 3000,
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "minWidth": 100,
 "toolTipFontColor": "#FF0000",
 "playbackBarHeadBorderColor": "#000000",
 "borderSize": 0,
 "height": "100%",
 "playbackBarHeadShadowVerticalLength": 0,
 "shadow": false,
 "toolTipBackgroundColor": "#000000",
 "progressRight": 0,
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 1,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "paddingLeft": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 10,
 "class": "ViewerArea",
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "playbackBarHeadShadowOpacity": 0.7,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.65,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 7,
 "toolTipFontSize": "13px",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "class": "Container",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4",
 "backgroundOpacity": 1,
 "width": 60,
 "scrollBarVisible": "rollOver",
 "right": 15,
 "children": [
  "this.Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
  "this.Button_485BFF41_598E_3DB2_41A9_33F36E014467",
  "this.Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
  "this.Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
  "this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0.02
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "top": 62,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#F7931E"
 ],
 "creationPolicy": "inAdvance",
 "height": 300,
 "borderSize": 0,
 "shadow": false,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set"
 },
 "minWidth": 1,
 "paddingLeft": 0,
 "visible": false,
 "layout": "vertical"
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "top": "0%",
 "verticalAlign": "top",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "creationPolicy": "inAdvance",
 "minWidth": 1,
 "borderSize": 0,
 "shadow": false,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "---PANORAMA LIST"
 },
 "gap": 10,
 "paddingLeft": 0,
 "visible": false,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)"
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "top": "0%",
 "verticalAlign": "top",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "creationPolicy": "inAdvance",
 "minWidth": 1,
 "borderSize": 0,
 "shadow": false,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "---LOCATION"
 },
 "gap": 10,
 "paddingLeft": 0,
 "visible": false,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)"
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "top": "0%",
 "verticalAlign": "top",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "creationPolicy": "inAdvance",
 "minWidth": 1,
 "borderSize": 0,
 "shadow": false,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "---FLOORPLAN"
 },
 "gap": 10,
 "paddingLeft": 0,
 "visible": false,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)"
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "top": "0%",
 "verticalAlign": "top",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "creationPolicy": "inAdvance",
 "minWidth": 1,
 "borderSize": 0,
 "shadow": false,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "---REALTOR"
 },
 "gap": 10,
 "paddingLeft": 0,
 "visible": false,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)"
},
{
 "class": "Container",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_EB83F655_FB15_07C7_41E4_BF3A9519577A",
 "left": "0%",
 "children": [
  "this.Container_E5AF4159_F764_9F09_41ED_CA8512EB8284",
  "this.Container_E5337168_F764_9F37_41E5_8F32A208E92C",
  "this.Container_E51BE7A8_F764_A337_41E7_69546C1E3699"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "0%",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "borderSize": 0,
 "shadow": false,
 "paddingTop": 0,
 "gap": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "rodape geral icones"
 },
 "height": "7.541%",
 "paddingLeft": 0,
 "layout": "horizontal"
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_019D2ADD_15B3_06D7_41AF_4A11DAD89415",
 "left": "0%",
 "width": 330,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_01901AD0_15B3_012D_41A6_7B893D31B52C",
  "this.Container_0190CAD0_15B3_012D_41AD_0A2F0B19D711"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "height": "100%",
 "borderSize": 0,
 "shadow": false,
 "paddingTop": 0,
 "gap": 10,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Painel esquerdo geral "
 },
 "paddingLeft": 0,
 "layout": "absolute"
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_018211B7_16B3_0353_41A6_77C6C02652D4",
 "backgroundOpacity": 0,
 "width": 115.05,
 "scrollBarVisible": "rollOver",
 "right": "0.18%",
 "children": [
  "this.Container_0182C1B7_16B3_0353_419D_218796592644",
  "this.Container_0182E1B7_16B3_0353_41B5_62892974579A"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "propagateClick": true,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "top": "0.44%",
 "verticalAlign": "top",
 "height": 641,
 "creationPolicy": "inAdvance",
 "minWidth": 1,
 "shadow": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "menu superior direito"
 },
 "paddingLeft": 0,
 "layout": "absolute"
},
{
 "class": "UIComponent",
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundOpacity": 0.55,
 "right": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingRight": 0,
 "top": 0,
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 0,
 "borderSize": 0,
 "shadow": false,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "data": {
  "name": "UIComponent80299"
 },
 "paddingLeft": 0,
 "visible": false,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 }
},
{
 "class": "ZoomImage",
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundOpacity": 1,
 "right": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "backgroundColorRatios": [],
 "propagateClick": false,
 "paddingRight": 0,
 "top": 0,
 "bottom": 0,
 "backgroundColor": [],
 "minWidth": 0,
 "borderSize": 0,
 "shadow": false,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scaleMode": "custom",
 "data": {
  "name": "ZoomImage80300"
 },
 "paddingLeft": 0,
 "visible": false
},
{
 "class": "CloseButton",
 "horizontalAlign": "center",
 "id": "closeButtonPopupPanorama",
 "backgroundOpacity": 0.3,
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "right": 10,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "layout": "horizontal",
 "borderRadius": 0,
 "iconHeight": 20,
 "minHeight": 0,
 "iconColor": "#000000",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "propagateClick": false,
 "paddingRight": 5,
 "top": 10,
 "verticalAlign": "middle",
 "rollOverIconColor": "#666666",
 "pressedIconColor": "#888888",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 0,
 "fontSize": "1.29vmin",
 "shadow": false,
 "paddingTop": 5,
 "backgroundColorDirection": "vertical",
 "label": "",
 "fontStyle": "normal",
 "borderSize": 0,
 "iconLineWidth": 5,
 "paddingBottom": 5,
 "gap": 5,
 "data": {
  "name": "CloseButton80301"
 },
 "textDecoration": "none",
 "paddingLeft": 5,
 "visible": false,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 20,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "rollOverBackgroundOpacity": 1,
 "horizontalAlign": "center",
 "id": "Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
 "backgroundOpacity": 1,
 "width": 60,
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "gap": 5,
 "iconHeight": 30,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "verticalAlign": "middle",
 "backgroundColor": [
  "#F7931E"
 ],
 "pressedIconWidth": 30,
 "borderColor": "#000000",
 "mode": "toggle",
 "pressedIconHeight": 30,
 "height": 60,
 "fontSize": 12,
 "borderSize": 0,
 "shadow": false,
 "pressedRollOverBackgroundColor": [
  "#CE6700"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "pressedIconURL": "skin/Button_4C5C0864_5A8E_C472_41C4_7C0748488A41_pressed.png",
 "fontStyle": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "iconBeforeLabel": true,
 "iconURL": "skin/Button_4C5C0864_5A8E_C472_41C4_7C0748488A41.png",
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "paddingLeft": 0,
 "data": {
  "name": "Button Settings Mute"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 30,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "class": "IconButton",
 "horizontalAlign": "center",
 "id": "IconButton_0182B1B7_16B3_0353_4195_1E5AE2ED8E80",
 "backgroundOpacity": 0,
 "width": 58,
 "maxHeight": 58,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "height": 58,
 "mode": "toggle",
 "minWidth": 1,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_0182B1B7_16B3_0353_4195_1E5AE2ED8E80_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_0182B1B7_16B3_0353_4195_1E5AE2ED8E80.png",
 "data": {
  "name": "IconButton MUTE"
 },
 "paddingLeft": 0,
 "pressedRollOverIconURL": "skin/IconButton_0182B1B7_16B3_0353_4195_1E5AE2ED8E80_pressed_rollover.png",
 "cursor": "hand",
 "maxWidth": 58
},
{
 "textDecoration": "none",
 "class": "Button",
 "rollOverBackgroundOpacity": 1,
 "horizontalAlign": "center",
 "id": "Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A",
 "backgroundOpacity": 1,
 "width": 60,
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "gap": 5,
 "iconHeight": 30,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "verticalAlign": "middle",
 "backgroundColor": [
  "#F7931E"
 ],
 "pressedIconWidth": 30,
 "borderColor": "#000000",
 "mode": "toggle",
 "pressedIconHeight": 30,
 "height": 60,
 "fontSize": 12,
 "borderSize": 0,
 "shadow": false,
 "pressedRollOverBackgroundColor": [
  "#CE6700"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "pressedIconURL": "skin/Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A_pressed.png",
 "fontStyle": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "iconBeforeLabel": true,
 "iconURL": "skin/Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A.png",
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "paddingLeft": 0,
 "data": {
  "name": "Button Settings Fullscreen"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 30,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "class": "IconButton",
 "horizontalAlign": "center",
 "id": "IconButton_018241B7_16B3_0353_41AF_66F445424C50",
 "backgroundOpacity": 0,
 "width": 58,
 "maxHeight": 58,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "height": 58,
 "mode": "toggle",
 "minWidth": 1,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_018241B7_16B3_0353_41AF_66F445424C50_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_018241B7_16B3_0353_41AF_66F445424C50.png",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "paddingLeft": 0,
 "pressedRollOverIconURL": "skin/IconButton_018241B7_16B3_0353_41AF_66F445424C50_pressed_rollover.png",
 "cursor": "hand",
 "maxWidth": 58
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.99,
   "yaw": -133.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EDCD826F_F5BD_98B9_41D9_AB9448EB0DCA_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E475B8A9_FB17_0B4F_41DB_BCE69CF552BF",
   "pitch": -8.57,
   "hfov": 16.99,
   "yaw": -133.22,
   "distance": 50
  }
 ],
 "id": "overlay_E19691A5_FB1F_1D47_4199_730A8831FCF0",
 "data": {
  "label": "Arrow 02a Right"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.25,
   "yaw": -172.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EDCD826F_F5BD_98B9_41D9_AB9448EB0DCA_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.72
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E46A18AA_FB17_0B4D_41E8_BE741883B4DC",
   "pitch": -15.72,
   "hfov": 11.25,
   "yaw": -172.5,
   "distance": 100
  }
 ],
 "id": "overlay_E1D7A3FE_FB13_FCC2_41ED_4C154D62BC12",
 "data": {
  "label": "Circle 03a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.78,
   "yaw": 128.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_ED21FC13_F5B2_8869_41B1_6B82BF95CB22_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E69289FA_FBF5_0CCD_41C6_E64AAB268CAD",
   "pitch": -17.36,
   "hfov": 10.78,
   "yaw": 128.64,
   "distance": 100
  }
 ],
 "id": "overlay_EE4D6C77_FB0D_0BC3_41DD_95AC0B41B5D0",
 "data": {
  "label": "Circle Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.46,
   "yaw": -57.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_ED21FC13_F5B2_8869_41B1_6B82BF95CB22_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.13
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E69129FA_FBF5_0CCD_41B0_95B90294551D",
   "pitch": -22.13,
   "hfov": 10.46,
   "yaw": -57.26,
   "distance": 100
  }
 ],
 "id": "overlay_EFA9867B_FB0D_07C3_41E5_E44BC4557B3F",
 "data": {
  "label": "Circle Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.24,
   "yaw": -154.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_ED21FC13_F5B2_8869_41B1_6B82BF95CB22_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E691DA05_FBF5_0F47_41ED_4152AC45600A",
   "pitch": -16.41,
   "hfov": 13.24,
   "yaw": -154.53,
   "distance": 100
  }
 ],
 "id": "overlay_EC7353B5_FB12_FD47_41B9_E7E4ABA7F673",
 "data": {
  "label": "Circle Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.94,
   "yaw": 155.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_ED75AFDB_F5B2_8799_41D9_7CA2B30A10F3_0_HS_0_0_0_map.gif",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_ECAC2502_F5BD_B86B_41B7_127BAEEE0A8A, this.camera_33240EE5_1791_1EF7_41A7_40B100431F80); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_DB90F9B0_FB0F_0D5D_419A_16BE4932C629",
   "pitch": -14.86,
   "hfov": 10.94,
   "yaw": 155.57,
   "distance": 50
  }
 ],
 "id": "overlay_E3DD8238_FB0D_1F4D_41D8_E1F1EDA6B3DD",
 "data": {
  "label": "Arrow 06b Right"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.88,
   "yaw": 69.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_ED75AFDB_F5B2_8799_41D9_7CA2B30A10F3_0_HS_1_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.88,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_ED75AFDB_F5B2_8799_41D9_7CA2B30A10F3_0_HS_1_0.png",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 41
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.38,
   "yaw": 69.81
  }
 ],
 "id": "overlay_EC4CED2E_FBF5_0545_41E7_460F130202C1",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.16,
   "yaw": -24.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_ED75AFDB_F5B2_8799_41D9_7CA2B30A10F3_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.66
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_E2826B7D_FBF3_0DC1_41DD_B5BFE268E105, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'pressedIconWidth':20,'pressedIconHeight':20,'paddingLeft':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_E6C90A6F_FBF5_0FC3_41DD_6EE83134DB69, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_DB9159B0_FB0F_0D5D_41E9_40E12D4F04E9",
   "pitch": -32.66,
   "hfov": 18.16,
   "yaw": -24.01,
   "distance": 100
  }
 ],
 "id": "overlay_EC68D8A0_FBF5_0B7D_41EC_BBA776F22E74",
 "data": {
  "label": "Info Red 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.64,
   "yaw": -150.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_ED75AFDB_F5B2_8799_41D9_7CA2B30A10F3_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_ED3E476C_F5BD_98BF_41EA_8A634499D0C9, this.camera_33387EFE_1791_1ED4_418A_2840CC955879); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_DB91F9B0_FB0F_0D5D_41CE_33234AA08CCA",
   "pitch": 8.41,
   "hfov": 6.64,
   "yaw": -150.45,
   "distance": 50
  }
 ],
 "id": "overlay_E34DC1D3_FB0D_3CC3_41CF_9A1CF3866BF2",
 "data": {
  "label": "Circle Arrow 02 Left"
 }
},
{
 "progressBarBorderSize": 0,
 "id": "viewer_uid3341FE28_1791_017C_41B0_DDE55ABDD072",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "minWidth": 100,
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "height": "100%",
 "playbackBarHeadShadowVerticalLength": 0,
 "shadow": false,
 "borderSize": 0,
 "progressRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "paddingLeft": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "class": "ViewerArea",
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "playbackBarHeadShadowOpacity": 0.7,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "ViewerArea80298"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.8,
   "yaw": 97.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_ECDCDE8F_F5B2_8879_41EA_5B8811ED30B1_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_ECFA4E15_F5B2_886E_41A6_F330DDBB32BA, this.camera_30C09F31_1791_1F6F_416A_C69514903799); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E69389F8_FBF5_0CCD_41EA_A8E57101832E",
   "pitch": -26,
   "hfov": 8.8,
   "yaw": 97.74,
   "distance": 100
  }
 ],
 "id": "overlay_EE026596_FB0D_0545_41BC_4063DCD14555",
 "data": {
  "label": "Circle Arrow 01a"
 }
},
{
 "viewerArea": "this.viewer_uid3341FE28_1791_017C_41B0_DDE55ABDD072",
 "id": "viewer_uid3341FE28_1791_017C_41B0_DDE55ABDD072VideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.24,
   "yaw": -3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_ECD0F56A_F5B5_98BB_41EB_05FC617F648E_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.7
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_EF2993C5_F5D2_9FE9_41E4_298EE44C2BDE",
   "pitch": -6.7,
   "hfov": 13.24,
   "yaw": -3,
   "distance": 100
  }
 ],
 "id": "overlay_EE43DD0C_F5B6_887E_41C9_9AFCF3EF8099",
 "data": {
  "label": "Arrow 04c"
 }
},
{
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 58.61,
 "bleaching": 0.7,
 "id": "overlay_E4E0ABEB_FB0D_0CC3_41EA_78D793D1F7EA",
 "yaw": -86.04
},
{
 "inertia": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_ECD0F56A_F5B5_98BB_41EB_05FC617F648E_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 22.5,
 "rotate": false,
 "click": "this.openLink('https://portalbarrancas.com/', '_blank')",
 "id": "panorama_ECD0F56A_F5B5_98BB_41EB_05FC617F648E_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.18,
   "yaw": -147.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_ECBFBCA8_F5B2_89A7_41A6_0F088CC563EA_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.39
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.18,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_ECBFBCA8_F5B2_89A7_41A6_0F088CC563EA_0_HS_0_0.png",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 39
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.39,
   "yaw": -147.76
  }
 ],
 "id": "overlay_EDE31181_FB13_1D3F_41C9_BCB4EFE6F4AB",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.38,
   "yaw": -44.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_ECBFBCA8_F5B2_89A7_41A6_0F088CC563EA_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 30.35
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_E302125F_FBF3_3FC2_41EB_15AE7257F60C, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'pressedIconWidth':20,'pressedIconHeight':20,'paddingLeft':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E697DA0A_FBF5_0F42_41EE_5055D204AF75",
   "pitch": 30.35,
   "hfov": 7.38,
   "yaw": -44.72,
   "distance": 100
  }
 ],
 "id": "overlay_E3B52DB3_FBFF_0543_41BC_E0D7C021F24E",
 "data": {
  "label": "Info Red 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.39,
   "yaw": -12.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_ECBFBCA8_F5B2_89A7_41A6_0F088CC563EA_0_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.62
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 24.39,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_ECBFBCA8_F5B2_89A7_41A6_0F088CC563EA_0_HS_2_0.png",
      "width": 143,
      "class": "ImageResourceLevel",
      "height": 71
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.62,
   "yaw": -12.06
  }
 ],
 "id": "overlay_EC73C1E3_FBFF_1CC3_41BD_8EDB148FEAC6",
 "data": {
  "label": "Imagem"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.38,
   "yaw": -42.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_ECBFBCA8_F5B2_89A7_41A6_0F088CC563EA_0_HS_3_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 23.3
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.38,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_ECBFBCA8_F5B2_89A7_41A6_0F088CC563EA_0_HS_3_0.png",
      "width": 116,
      "class": "ImageResourceLevel",
      "height": 98
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 23.3,
   "yaw": -42.95
  }
 ],
 "id": "overlay_E32918AC_FBF3_0B45_41ED_62B1C5DF1883",
 "data": {
  "label": "Imagem"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.17,
   "yaw": -13.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_ECBFBCA8_F5B2_89A7_41A6_0F088CC563EA_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 17.01
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_E33D9636_FBF7_0745_41BD_CC82C0786306, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'pressedIconWidth':20,'pressedIconHeight':20,'paddingLeft':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E6963A0C_FBF5_0F45_419B_52E3CF5734CB",
   "pitch": 17.01,
   "hfov": 8.17,
   "yaw": -13.87,
   "distance": 100
  }
 ],
 "id": "overlay_E3C79274_FBF5_1FC5_41A5_53FCDA93DCD4",
 "data": {
  "label": "Info Red 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.19,
   "yaw": 128.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_ECBFBCA8_F5B2_89A7_41A6_0F088CC563EA_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.02
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E476A896_FB17_0B45_41D6_7368558B5DB1",
   "pitch": -6.02,
   "hfov": 21.19,
   "yaw": 128.1,
   "distance": 50
  }
 ],
 "id": "overlay_E30CA34C_FB13_3DC5_41D2_9D99BADC1983",
 "data": {
  "label": "Circle Arrow 02 Right"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.22,
   "yaw": 92.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_ED3E476C_F5BD_98BF_41EA_8A634499D0C9_0_HS_0_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -36.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupMedia(this.window_EC17D391_FB17_7D5F_41E4_25F2D52C5B12, this.video_EDA777F7_FB15_04C3_41BC_E35F8824B641, this.playList_1E84DD54_157F_03D5_41A3_70D870BA1CDA, '90%', '90%', false, true)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.22,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_ED3E476C_F5BD_98BF_41EA_8A634499D0C9_0_HS_0_0.png",
      "width": 81,
      "class": "ImageResourceLevel",
      "height": 64
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -36.33,
   "yaw": 92.03
  }
 ],
 "id": "overlay_ED1F2F3E_FB1F_0545_41DC_5DDCEF38DE69",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 29.69,
   "yaw": 5.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_ED3E476C_F5BD_98BF_41EA_8A634499D0C9_0_HS_1_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.66
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 29.69,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_ED3E476C_F5BD_98BF_41EA_8A634499D0C9_0_HS_1_0.png",
      "width": 205,
      "class": "ImageResourceLevel",
      "height": 176
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.66,
   "yaw": 5.95
  }
 ],
 "id": "overlay_ED9A6BAE_FB1D_0D45_41EA_CA128953F0EC",
 "data": {
  "label": "Imagem"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.14,
   "yaw": 2.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_ED3E476C_F5BD_98BF_41EA_8A634499D0C9_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupMedia(this.window_EC8166CF_FB17_04C3_41A0_EF9B1044A7B1, this.video_EC0A97A8_FB17_054D_41D5_F62C708C5452, this.playList_1E86CD58_157F_03DC_41A2_DA238F7EC0C9, '90%', '90%', false, true)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.14,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_ED3E476C_F5BD_98BF_41EA_8A634499D0C9_0_HS_2_0.png",
      "width": 56,
      "class": "ImageResourceLevel",
      "height": 58
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.31,
   "yaw": 2.83
  }
 ],
 "id": "overlay_EDCD5063_FB13_7BC3_41D9_90B0F9561027",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.8,
   "yaw": 77.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_ED3E476C_F5BD_98BF_41EA_8A634499D0C9_0_HS_3_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.47
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.8,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_ED3E476C_F5BD_98BF_41EA_8A634499D0C9_0_HS_3_0.png",
      "width": 112,
      "class": "ImageResourceLevel",
      "height": 42
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.47,
   "yaw": 77.01
  }
 ],
 "id": "overlay_EC50A4C3_FB15_04C3_41D0_2584E26B5DA1",
 "data": {
  "label": "Imagem"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.58,
   "yaw": -46.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_ED3E476C_F5BD_98BF_41EA_8A634499D0C9_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.01
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_ED75AFDB_F5B2_8799_41D9_7CA2B30A10F3, this.camera_30CD4F18_1791_1F5D_41B0_BC6836093A6B); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E6A33A2D_FBF5_0F47_41CB_FC8ED85D7242",
   "pitch": -23.01,
   "hfov": 8.58,
   "yaw": -46.56,
   "distance": 100
  }
 ],
 "id": "overlay_EC676F7E_FB13_05C2_41EC_BA05C237493B",
 "data": {
  "label": "Circle Arrow 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.32,
   "yaw": -97.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_ED3E476C_F5BD_98BF_41EA_8A634499D0C9_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.3
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E6A3CA2E_FBF5_0F5E_41DF_16987D73B3DB",
   "pitch": -19.3,
   "hfov": 7.32,
   "yaw": -97.27,
   "distance": 100
  }
 ],
 "id": "overlay_EC4D665E_FB0F_07C5_41E3_B3DB9FAB00FD",
 "data": {
  "label": "Circle 360 2"
 }
},
{
 "textDecoration": "none",
 "class": "Button",
 "rollOverBackgroundOpacity": 1,
 "horizontalAlign": "center",
 "id": "Button_485BFF41_598E_3DB2_41A9_33F36E014467",
 "backgroundOpacity": 1,
 "rollOverIconWidth": 30,
 "width": 60,
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "gap": 5,
 "iconHeight": 30,
 "layout": "horizontal",
 "borderRadius": 0,
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#F7931E"
 ],
 "pressedIconWidth": 30,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "mode": "toggle",
 "pressedIconHeight": 30,
 "height": 60,
 "fontSize": 12,
 "borderSize": 0,
 "shadow": false,
 "pressedRollOverBackgroundColor": [
  "#CE6700"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "pressedIconURL": "skin/Button_485BFF41_598E_3DB2_41A9_33F36E014467_pressed.png",
 "fontStyle": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "iconBeforeLabel": true,
 "iconURL": "skin/Button_485BFF41_598E_3DB2_41A9_33F36E014467.png",
 "rollOverIconHeight": 30,
 "minWidth": 1,
 "paddingLeft": 0,
 "data": {
  "name": "Button Settings Gyro"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 30,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "class": "IconButton",
 "horizontalAlign": "center",
 "id": "IconButton_018281B7_16B3_0353_41B1_B87DE026CAD1",
 "backgroundOpacity": 0,
 "width": 58,
 "maxHeight": 58,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "height": 58,
 "mode": "toggle",
 "minWidth": 1,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_018281B7_16B3_0353_41B1_B87DE026CAD1_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_018281B7_16B3_0353_41B1_B87DE026CAD1.png",
 "data": {
  "name": "IconButton GYRO"
 },
 "paddingLeft": 0,
 "pressedRollOverIconURL": "skin/IconButton_018281B7_16B3_0353_41B1_B87DE026CAD1_pressed_rollover.png",
 "cursor": "hand",
 "maxWidth": 58
},
{
 "textDecoration": "none",
 "class": "Button",
 "rollOverBackgroundOpacity": 1,
 "horizontalAlign": "center",
 "id": "Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
 "backgroundOpacity": 1,
 "width": 60,
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "gap": 5,
 "iconHeight": 30,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "verticalAlign": "middle",
 "backgroundColor": [
  "#F7931E"
 ],
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "height": 60,
 "fontSize": 12,
 "borderSize": 0,
 "shadow": false,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "pressedIconURL": "skin/Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0_pressed.png",
 "fontStyle": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "iconURL": "skin/Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0.png",
 "data": {
  "name": "Button settings VR"
 },
 "minWidth": 1,
 "paddingLeft": 0,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 30,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "class": "IconButton",
 "horizontalAlign": "center",
 "id": "IconButton_018291B7_16B3_0353_418A_384BA65FFE7E",
 "backgroundOpacity": 0,
 "width": 58,
 "maxHeight": 58,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_018291B7_16B3_0353_418A_384BA65FFE7E_rollover.png",
 "propagateClick": true,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "height": 58,
 "mode": "push",
 "minWidth": 1,
 "shadow": false,
 "borderSize": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_018291B7_16B3_0353_418A_384BA65FFE7E.png",
 "data": {
  "name": "IconButton VR"
 },
 "paddingLeft": 0,
 "cursor": "hand",
 "maxWidth": 58
},
{
 "textDecoration": "none",
 "class": "Button",
 "rollOverBackgroundOpacity": 1,
 "horizontalAlign": "center",
 "id": "Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
 "backgroundOpacity": 1,
 "rollOverIconWidth": 30,
 "width": 60,
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "gap": 5,
 "iconHeight": 30,
 "layout": "horizontal",
 "borderRadius": 0,
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "verticalAlign": "middle",
 "backgroundColor": [
  "#F7931E"
 ],
 "pressedIconWidth": 30,
 "borderColor": "#000000",
 "mode": "toggle",
 "pressedIconHeight": 30,
 "height": 60,
 "fontSize": 12,
 "borderSize": 0,
 "shadow": false,
 "pressedRollOverBackgroundColor": [
  "#CE6700"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "pressedIconURL": "skin/Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA_pressed.png",
 "fontStyle": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "iconBeforeLabel": true,
 "iconURL": "skin/Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA.png",
 "rollOverIconHeight": 30,
 "minWidth": 1,
 "paddingLeft": 0,
 "data": {
  "name": "Button Settings HS"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 30,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "class": "IconButton",
 "horizontalAlign": "center",
 "id": "IconButton_018251B7_16B3_0353_41B5_035CC8E48FE2",
 "backgroundOpacity": 0,
 "width": 58,
 "maxHeight": 58,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "height": 58,
 "mode": "toggle",
 "minWidth": 1,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_018251B7_16B3_0353_41B5_035CC8E48FE2_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_018251B7_16B3_0353_41B5_035CC8E48FE2.png",
 "data": {
  "name": "IconButton HS "
 },
 "paddingLeft": 0,
 "pressedRollOverIconURL": "skin/IconButton_018251B7_16B3_0353_41B5_035CC8E48FE2_pressed_rollover.png",
 "cursor": "hand",
 "maxWidth": 58
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.78,
   "yaw": 128.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_ECAC2502_F5BD_B86B_41B7_127BAEEE0A8A_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_ED75AFDB_F5B2_8799_41D9_7CA2B30A10F3, this.camera_330E4E7A_1791_01DC_41B1_5208A3F6F44A); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E69259F9_FBF5_0CCF_41E7_91C2A0132C30",
   "pitch": -17.36,
   "hfov": 10.78,
   "yaw": 128.64,
   "distance": 100
  }
 ],
 "id": "overlay_EFB448C7_FB0F_0CC2_41E1_5A09F5EF16BD",
 "data": {
  "label": "Circle Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.01,
   "yaw": 170.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_ECAC2502_F5BD_B86B_41B7_127BAEEE0A8A_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_ECFA4E15_F5B2_886E_41A6_F330DDBB32BA, this.camera_33067E94_1791_0155_41B6_6EDBB5C4C1F7); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E692E9F9_FBF5_0CCF_41AB_813871398202",
   "pitch": -12.84,
   "hfov": 11.01,
   "yaw": 170.35,
   "distance": 100
  }
 ],
 "id": "overlay_EEEDD3B2_FB0F_1D5D_41D1_B4766F82379F",
 "data": {
  "label": "Circle Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.71,
   "yaw": -103.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EDB861D0_F5B2_7BE7_41A6_858756CFD416_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.93
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E47518A9_FB17_0B4F_41D6_E30BB31713BE",
   "pitch": -9.93,
   "hfov": 20.71,
   "yaw": -103.67,
   "distance": 100
  }
 ],
 "id": "overlay_E2C5C179_FB15_1DCE_41E2_98F886449259",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.05,
   "yaw": -74.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EDB861D0_F5B2_7BE7_41A6_858756CFD416_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.46
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E47588A9_FB17_0B4F_41D5_667220A4124E",
   "pitch": -17.46,
   "hfov": 20.05,
   "yaw": -74.02,
   "distance": 100
  }
 ],
 "id": "overlay_E378E8CC_FB15_0CC5_41D6_C066C7EC444D",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "progressBarBorderSize": 0,
 "id": "viewer_uid33423E26_1791_0174_41A4_44DCE0E3A50E",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "minWidth": 100,
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "height": "100%",
 "playbackBarHeadShadowVerticalLength": 0,
 "shadow": false,
 "borderSize": 0,
 "progressRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "paddingLeft": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "class": "ViewerArea",
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "playbackBarHeadShadowOpacity": 0.7,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "ViewerArea80297"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.46,
   "yaw": -92.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_ECFA4E15_F5B2_886E_41A6_F330DDBB32BA_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_ECDCDE8F_F5B2_8879_41EA_5B8811ED30B1, this.camera_331A8EAC_1791_0175_419C_0DB72201A699); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E69C9999_FBF5_0D4F_41E5_104613B9C816",
   "pitch": -14.91,
   "hfov": 9.46,
   "yaw": -92.59,
   "distance": 100
  }
 ],
 "id": "overlay_EF6BCBBD_FB35_0D47_41E3_E018CF5B452F",
 "data": {
  "label": "Circle Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.58,
   "yaw": -29.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_ECFA4E15_F5B2_886E_41A6_F330DDBB32BA_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.71
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_ECAC2502_F5BD_B86B_41B7_127BAEEE0A8A, this.camera_332F5ECA_1791_013C_41B4_FD802D90ED54); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E69359EB_FBF5_0CC3_41B7_58DAD723C9AB",
   "pitch": -11.71,
   "hfov": 9.58,
   "yaw": -29.61,
   "distance": 100
  }
 ],
 "id": "overlay_EE34C12C_FB35_FD46_41B9_D803BB2F1C1B",
 "data": {
  "label": "Circle Arrow 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.34,
   "yaw": 10.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_ECFA4E15_F5B2_886E_41A6_F330DDBB32BA_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E693E9F2_FBF5_0CDD_41A5_ACF176AF8059",
   "pitch": -17.38,
   "hfov": 9.34,
   "yaw": 10.37,
   "distance": 100
  }
 ],
 "id": "overlay_EFACB606_FB35_0745_4199_CAB6E43BF99E",
 "data": {
  "label": "Circle Arrow 01a"
 }
},
{
 "viewerArea": "this.viewer_uid33423E26_1791_0174_41A4_44DCE0E3A50E",
 "id": "viewer_uid33423E26_1791_0174_41A4_44DCE0E3A50EVideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "class": "Container",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "paddingRight": 0,
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "creationPolicy": "inAdvance",
 "shadowHorizontalLength": 0,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "shadow": true,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "layout": "absolute"
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "paddingRight": 0,
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "creationPolicy": "inAdvance",
 "shadowHorizontalLength": 0,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "shadow": true,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "layout": "horizontal"
},
{
 "class": "Container",
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "15%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "propagateClick": false,
 "paddingRight": 20,
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "80%",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarWidth": 10,
 "borderSize": 0,
 "shadow": false,
 "paddingTop": 20,
 "gap": 10,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "paddingLeft": 0,
 "layout": "vertical"
},
{
 "class": "Container",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "paddingRight": 0,
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "creationPolicy": "inAdvance",
 "shadowHorizontalLength": 0,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "shadow": true,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "layout": "absolute"
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "15%",
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_27875147_3F82_7A70_41CC_C0FFBB32BEFD",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "paddingRight": 0,
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "creationPolicy": "inAdvance",
 "shadowHorizontalLength": 0,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "shadow": true,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "layout": "horizontal"
},
{
 "class": "Container",
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "15%",
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "15%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "propagateClick": false,
 "paddingRight": 20,
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "80%",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarWidth": 10,
 "borderSize": 0,
 "shadow": false,
 "paddingTop": 20,
 "gap": 10,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "paddingLeft": 0,
 "layout": "vertical"
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_E5AF4159_F764_9F09_41ED_CA8512EB8284",
 "backgroundOpacity": 0,
 "width": "33.33%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 0,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "middle",
 "height": "100%",
 "shadow": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "esquerda"
 },
 "paddingLeft": 21,
 "layout": "horizontal"
},
{
 "class": "Container",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_E5337168_F764_9F37_41E5_8F32A208E92C",
 "backgroundOpacity": 0,
 "width": "33.33%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 0,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "middle",
 "height": "100%",
 "shadow": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "centro"
 },
 "paddingLeft": 0,
 "layout": "horizontal"
},
{
 "class": "Container",
 "horizontalAlign": "right",
 "scrollBarOpacity": 0,
 "id": "Container_E51BE7A8_F764_A337_41E7_69546C1E3699",
 "backgroundOpacity": 0,
 "children": [
  "this.Image_0C930B79_16B1_07DC_41AB_5FA0F7AEBB9E"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "33.33%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 29,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "middle",
 "height": "100%",
 "shadow": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "direita"
 },
 "paddingLeft": 0,
 "layout": "horizontal"
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_01901AD0_15B3_012D_41A6_7B893D31B52C",
 "left": "0%",
 "width": 66,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_0190FAD0_15B3_012D_41A1_564A430E7926",
  "this.IconButton_0190EAD0_15B3_012D_41B0_5040515AC40B"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "height": "100%",
 "borderSize": 0,
 "shadow": false,
 "paddingTop": 0,
 "gap": 10,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- COLLAPSE"
 },
 "paddingLeft": 0,
 "visible": false,
 "layout": "absolute"
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0190CAD0_15B3_012D_41AD_0A2F0B19D711",
 "backgroundOpacity": 0,
 "width": 330,
 "scrollBarVisible": "rollOver",
 "right": 0,
 "children": [
  "this.Container_0190BAD0_15B3_012D_41B2_557E75D04BF6",
  "this.IconButton_019D3ADD_15B3_06D7_4190_C8BF9CF5FC90"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "height": "100%",
 "shadow": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- EXPANDED"
 },
 "paddingLeft": 0,
 "layout": "absolute"
},
{
 "class": "Container",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_0182C1B7_16B3_0353_419D_218796592644",
 "backgroundOpacity": 0,
 "width": 110,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.IconButton_0182F1B7_16B3_0353_41A8_30A0D0465221"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "propagateClick": true,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "top": "0%",
 "verticalAlign": "middle",
 "height": 110,
 "creationPolicy": "inAdvance",
 "minWidth": 1,
 "shadow": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "button menu sup"
 },
 "paddingLeft": 0,
 "layout": "horizontal"
},
{
 "class": "Container",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_0182E1B7_16B3_0353_41B5_62892974579A",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_018291B7_16B3_0353_418A_384BA65FFE7E",
  "this.IconButton_018281B7_16B3_0353_41B1_B87DE026CAD1",
  "this.IconButton_0182B1B7_16B3_0353_4195_1E5AE2ED8E80",
  "this.IconButton_018251B7_16B3_0353_41B5_035CC8E48FE2",
  "this.IconButton_018241B7_16B3_0353_41AF_66F445424C50",
  "this.IconButton_018271B7_16B3_0353_41B1_EA202C9BAD28",
  "this.IconButton_018261B7_16B3_0353_4192_DB78261A13EE"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "91.304%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "propagateClick": true,
 "paddingRight": 0,
 "bottom": "0%",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "shadow": false,
 "borderSize": 0,
 "gap": 3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set"
 },
 "height": "85.959%",
 "paddingLeft": 0,
 "visible": false,
 "layout": "vertical"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EDCD826F_F5BD_98B9_41D9_AB9448EB0DCA_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_E475B8A9_FB17_0B4F_41DB_BCE69CF552BF",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EDCD826F_F5BD_98B9_41D9_AB9448EB0DCA_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_E46A18AA_FB17_0B4D_41E8_BE741883B4DC",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_ED21FC13_F5B2_8869_41B1_6B82BF95CB22_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "id": "AnimatedImageResource_E69289FA_FBF5_0CCD_41C6_E64AAB268CAD",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_ED21FC13_F5B2_8869_41B1_6B82BF95CB22_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "id": "AnimatedImageResource_E69129FA_FBF5_0CCD_41B0_95B90294551D",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_ED21FC13_F5B2_8869_41B1_6B82BF95CB22_0_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "id": "AnimatedImageResource_E691DA05_FBF5_0F47_41ED_4152AC45600A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_ED75AFDB_F5B2_8799_41D9_7CA2B30A10F3_0_HS_0_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_DB90F9B0_FB0F_0D5D_419A_16BE4932C629",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_ED75AFDB_F5B2_8799_41D9_7CA2B30A10F3_0_HS_2_0.png",
   "width": 660,
   "class": "ImageResourceLevel",
   "height": 990
  }
 ],
 "id": "AnimatedImageResource_DB9159B0_FB0F_0D5D_41E9_40E12D4F04E9",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_ED75AFDB_F5B2_8799_41D9_7CA2B30A10F3_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_DB91F9B0_FB0F_0D5D_41CE_33234AA08CCA",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_ECDCDE8F_F5B2_8879_41EA_5B8811ED30B1_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "id": "AnimatedImageResource_E69389F8_FBF5_0CCD_41EA_A8E57101832E",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 21,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_ECD0F56A_F5B5_98BB_41EB_05FC617F648E_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_EF2993C5_F5D2_9FE9_41E4_298EE44C2BDE",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_ECBFBCA8_F5B2_89A7_41A6_0F088CC563EA_0_HS_1_0.png",
   "width": 780,
   "class": "ImageResourceLevel",
   "height": 1170
  }
 ],
 "id": "AnimatedImageResource_E697DA0A_FBF5_0F42_41EE_5055D204AF75",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_ECBFBCA8_F5B2_89A7_41A6_0F088CC563EA_0_HS_4_0.png",
   "width": 780,
   "class": "ImageResourceLevel",
   "height": 1170
  }
 ],
 "id": "AnimatedImageResource_E6963A0C_FBF5_0F45_419B_52E3CF5734CB",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_ECBFBCA8_F5B2_89A7_41A6_0F088CC563EA_0_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E476A896_FB17_0B45_41D6_7368558B5DB1",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_ED3E476C_F5BD_98BF_41EA_8A634499D0C9_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E6A33A2D_FBF5_0F47_41CB_FC8ED85D7242",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_ED3E476C_F5BD_98BF_41EA_8A634499D0C9_0_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E6A3CA2E_FBF5_0F5E_41DF_16987D73B3DB",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_ECAC2502_F5BD_B86B_41B7_127BAEEE0A8A_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "id": "AnimatedImageResource_E69259F9_FBF5_0CCF_41E7_91C2A0132C30",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_ECAC2502_F5BD_B86B_41B7_127BAEEE0A8A_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "id": "AnimatedImageResource_E692E9F9_FBF5_0CCF_41AB_813871398202",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EDB861D0_F5B2_7BE7_41A6_858756CFD416_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E47518A9_FB17_0B4F_41D6_E30BB31713BE",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EDB861D0_F5B2_7BE7_41A6_858756CFD416_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E47588A9_FB17_0B4F_41D5_667220A4124E",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_ECFA4E15_F5B2_886E_41A6_F330DDBB32BA_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "id": "AnimatedImageResource_E69C9999_FBF5_0D4F_41E5_104613B9C816",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_ECFA4E15_F5B2_886E_41A6_F330DDBB32BA_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "id": "AnimatedImageResource_E69359EB_FBF5_0CC3_41B7_58DAD723C9AB",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_ECFA4E15_F5B2_886E_41A6_F330DDBB32BA_0_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "id": "AnimatedImageResource_E693E9F2_FBF5_0CDD_41A5_ACF176AF8059",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "backgroundOpacity": 0.3,
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "creationPolicy": "inAdvance",
 "height": 140,
 "borderSize": 0,
 "shadow": false,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "minWidth": 1,
 "paddingLeft": 0,
 "layout": "absolute"
},
{
 "horizontalAlign": "center",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "width": "100%",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "backgroundOpacity": 0,
 "itemMinHeight": 50,
 "scrollBarMargin": 2,
 "itemLabelPosition": "bottom",
 "itemVerticalAlign": "top",
 "minHeight": 1,
 "itemPaddingLeft": 3,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 70,
 "itemOpacity": 1,
 "minWidth": 1,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "verticalAlign": "middle",
 "itemThumbnailOpacity": 1,
 "itemMinWidth": 50,
 "height": "92%",
 "itemBackgroundColor": [],
 "itemPaddingTop": 3,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "borderSize": 0,
 "shadow": false,
 "itemPaddingRight": 3,
 "itemBackgroundColorRatios": [],
 "scrollBarColor": "#F7931E",
 "itemHeight": 160,
 "paddingLeft": 70,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#F7931E",
 "scrollBarOpacity": 0.5,
 "class": "ThumbnailGrid",
 "itemLabelFontWeight": "normal",
 "itemThumbnailHeight": 125,
 "rollOverItemThumbnailShadow": true,
 "scrollBarVisible": "rollOver",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 13,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "borderRadius": 5,
 "itemLabelGap": 7,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadow": false,
 "bottom": -0.2,
 "itemThumbnailWidth": 220,
 "itemLabelFontColor": "#666666",
 "selectedItemThumbnailShadow": true,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemHorizontalAlign": "center",
 "gap": 26,
 "itemMaxHeight": 1000,
 "paddingTop": 10,
 "itemWidth": 220,
 "itemPaddingBottom": 3,
 "itemMaxWidth": 1000,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "paddingBottom": 70,
 "selectedItemLabelFontWeight": "bold",
 "itemMode": "normal",
 "data": {
  "name": "ThumbnailList"
 },
 "itemThumbnailBorderRadius": 0,
 "rollOverItemThumbnailShadowColor": "#F7931E",
 "itemLabelFontFamily": "Montserrat",
 "rollOverItemLabelFontColor": "#F7931E"
},
{
 "class": "WebFrame",
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "backgroundOpacity": 1,
 "width": "100%",
 "borderRadius": 0,
 "insetBorder": false,
 "minHeight": 1,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d680.5245826445853!2d-63.0315935102797!3d-7.501652037935096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9230d9ece0603407%3A0x5770661a4b4237f2!2s!5e1!3m2!1spt-BR!2sbr!4v1649122652753!5m2!1spt-BR!2sbr\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "shadow": false,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "scrollEnabled": true,
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame48191"
 },
 "height": "100%",
 "paddingLeft": 0
},
{
 "class": "IconButton",
 "horizontalAlign": "center",
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "backgroundOpacity": 0,
 "width": "25%",
 "maxHeight": 60,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "propagateClick": false,
 "paddingRight": 0,
 "minWidth": 50,
 "verticalAlign": "middle",
 "mode": "push",
 "height": "75%",
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "paddingTop": 0,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "data": {
  "name": "X"
 },
 "paddingLeft": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "progressBarBorderSize": 0,
 "id": "MapViewer",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "minHeight": 1,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Georgia",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "minWidth": 1,
 "toolTipFontColor": "#FF0000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipBackgroundColor": "#000000",
 "height": "100%",
 "playbackBarHeadShadowVerticalLength": 0,
 "shadow": false,
 "borderSize": 0,
 "progressRight": 0,
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "paddingLeft": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 10,
 "class": "ViewerArea",
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "playbackBarHeadShadowOpacity": 0.7,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.65,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 7,
 "toolTipFontSize": "13px",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Floor Plan"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 0,
 "verticalAlign": "top",
 "height": 140,
 "creationPolicy": "inAdvance",
 "minWidth": 1,
 "shadow": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "paddingLeft": 0,
 "layout": "absolute"
},
{
 "class": "Container",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "backgroundOpacity": 1,
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "55%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#000000"
 ],
 "creationPolicy": "inAdvance",
 "verticalAlign": "middle",
 "minWidth": 1,
 "shadow": false,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "height": "100%",
 "paddingLeft": 0,
 "layout": "absolute"
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_27875147_3F82_7A70_41CC_C0FFBB32BEFD",
 "backgroundOpacity": 1,
 "width": 8,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#F7931E"
 ],
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "minWidth": 1,
 "shadow": false,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "orange line"
 },
 "height": "100%",
 "paddingLeft": 0,
 "layout": "absolute"
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "45%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 60,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "minWidth": 460,
 "shadow": false,
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 20,
 "contentOpaque": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "height": "100%",
 "paddingLeft": 60,
 "layout": "vertical"
},
{
 "class": "IconButton",
 "horizontalAlign": "center",
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "backgroundOpacity": 0,
 "width": "25%",
 "maxHeight": 60,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "propagateClick": false,
 "paddingRight": 0,
 "minWidth": 50,
 "verticalAlign": "middle",
 "mode": "push",
 "height": "75%",
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "paddingTop": 0,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "data": {
  "name": "X"
 },
 "paddingLeft": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "class": "Image",
 "horizontalAlign": "center",
 "id": "Image_0C930B79_16B1_07DC_41AB_5FA0F7AEBB9E",
 "backgroundOpacity": 0,
 "width": "14.122%",
 "maxHeight": 1080,
 "url": "skin/Image_0C930B79_16B1_07DC_41AB_5FA0F7AEBB9E.png",
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "paddingRight": 0,
 "minWidth": 1,
 "verticalAlign": "middle",
 "height": "94.203%",
 "shadow": false,
 "borderSize": 0,
 "click": "this.openLink('https://portalbarrancas.com/', '_blank')",
 "paddingTop": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image38142"
 },
 "paddingLeft": 0,
 "cursor": "hand",
 "maxWidth": 1080
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0190FAD0_15B3_012D_41A1_564A430E7926",
 "left": "0%",
 "width": 36,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.4,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "top": "0%",
 "backgroundColor": [
  "#000000"
 ],
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "minWidth": 1,
 "borderSize": 0,
 "shadow": false,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container black"
 },
 "height": "100%",
 "paddingLeft": 0,
 "layout": "absolute"
},
{
 "class": "IconButton",
 "horizontalAlign": "center",
 "id": "IconButton_0190EAD0_15B3_012D_41B0_5040515AC40B",
 "left": 10,
 "width": 50,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "maxHeight": 80,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_0190EAD0_15B3_012D_41B0_5040515AC40B_rollover.png",
 "propagateClick": true,
 "paddingRight": 0,
 "top": "40%",
 "verticalAlign": "middle",
 "bottom": "40%",
 "minWidth": 1,
 "mode": "push",
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_0190CAD0_15B3_012D_41AD_0A2F0B19D711, true, 0, this.effect_49B5BB1B_570B_6EC6_41BA_9E76A2F95A16, 'showEffect', false); this.setComponentVisibility(this.Container_01901AD0_15B3_012D_41A6_7B893D31B52C, false, 0, this.effect_49353574_570C_A542_41D0_43B05AC58F9B, 'hideEffect', false)",
 "iconURL": "skin/IconButton_0190EAD0_15B3_012D_41B0_5040515AC40B.png",
 "data": {
  "name": "IconButton arrow"
 },
 "paddingLeft": 0,
 "cursor": "hand",
 "maxWidth": 80
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0190BAD0_15B3_012D_41B2_557E75D04BF6",
 "left": "0%",
 "children": [
  "this.Container_01909AD0_15B3_012D_41A4_CF140E7E8C24"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "width": "90%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "top": "0%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "minWidth": 1,
 "borderSize": 0,
 "shadow": false,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container"
 },
 "height": "100%",
 "paddingLeft": 0,
 "layout": "absolute"
},
{
 "class": "IconButton",
 "horizontalAlign": "center",
 "id": "IconButton_019D3ADD_15B3_06D7_4190_C8BF9CF5FC90",
 "backgroundOpacity": 0,
 "width": 50,
 "maxHeight": 50,
 "right": 9,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_019D3ADD_15B3_06D7_4190_C8BF9CF5FC90_rollover.png",
 "propagateClick": true,
 "paddingRight": 0,
 "top": "40%",
 "verticalAlign": "middle",
 "bottom": "40%",
 "minWidth": 1,
 "mode": "push",
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_0190CAD0_15B3_012D_41AD_0A2F0B19D711, false, 0, this.effect_2C352674_3AA1_EE57_41A1_BD5B5FE304A0, 'hideEffect', false); this.setComponentVisibility(this.Container_01901AD0_15B3_012D_41A6_7B893D31B52C, true, 0, this.effect_4983BDE0_570B_E541_41B3_32D6394D0ACC, 'showEffect', false)",
 "iconURL": "skin/IconButton_019D3ADD_15B3_06D7_4190_C8BF9CF5FC90.png",
 "data": {
  "name": "IconButton collapse"
 },
 "paddingLeft": 0,
 "cursor": "hand",
 "maxWidth": 50
},
{
 "class": "IconButton",
 "horizontalAlign": "center",
 "id": "IconButton_0182F1B7_16B3_0353_41A8_30A0D0465221",
 "backgroundOpacity": 0,
 "width": 60,
 "maxHeight": 60,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "height": 60,
 "mode": "toggle",
 "minWidth": 1,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_0182F1B7_16B3_0353_41A8_30A0D0465221_pressed.png",
 "transparencyActive": true,
 "click": "if(!this.Container_0182E1B7_16B3_0353_41B5_62892974579A.get('visible')){ this.setComponentVisibility(this.Container_0182E1B7_16B3_0353_41B5_62892974579A, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_0182E1B7_16B3_0353_41B5_62892974579A, false, 0, null, null, false) }",
 "paddingTop": 0,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_0182F1B7_16B3_0353_41A8_30A0D0465221.png",
 "data": {
  "name": "image button menu"
 },
 "paddingLeft": 0,
 "pressedRollOverIconURL": "skin/IconButton_0182F1B7_16B3_0353_41A8_30A0D0465221_pressed_rollover.png",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "class": "IconButton",
 "horizontalAlign": "center",
 "id": "IconButton_018271B7_16B3_0353_41B1_EA202C9BAD28",
 "backgroundOpacity": 0,
 "width": 58,
 "maxHeight": 58,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_018271B7_16B3_0353_41B1_EA202C9BAD28_rollover.png",
 "propagateClick": true,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "height": 58,
 "mode": "push",
 "minWidth": 1,
 "shadow": false,
 "borderSize": 0,
 "transparencyActive": true,
 "click": "this.shareTwitter(window.location.href)",
 "paddingTop": 0,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_018271B7_16B3_0353_41B1_EA202C9BAD28.png",
 "data": {
  "name": "IconButton TWITTER"
 },
 "paddingLeft": 0,
 "visible": false,
 "cursor": "hand",
 "maxWidth": 58
},
{
 "class": "IconButton",
 "horizontalAlign": "center",
 "id": "IconButton_018261B7_16B3_0353_4192_DB78261A13EE",
 "backgroundOpacity": 0,
 "width": 58,
 "maxHeight": 58,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_018261B7_16B3_0353_4192_DB78261A13EE_rollover.png",
 "propagateClick": true,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "height": 58,
 "mode": "push",
 "minWidth": 1,
 "shadow": false,
 "borderSize": 0,
 "transparencyActive": true,
 "click": "this.shareFacebook(window.location.href)",
 "paddingTop": 0,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_018261B7_16B3_0353_4192_DB78261A13EE.png",
 "data": {
  "name": "IconButton FB"
 },
 "paddingLeft": 0,
 "visible": false,
 "cursor": "hand",
 "maxWidth": 58
},
{
 "class": "IconButton",
 "horizontalAlign": "right",
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "backgroundOpacity": 0,
 "width": "100%",
 "maxHeight": 60,
 "right": 20,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "propagateClick": false,
 "paddingRight": 0,
 "top": 20,
 "minWidth": 50,
 "verticalAlign": "top",
 "mode": "push",
 "height": "36.14%",
 "shadow": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "transparencyActive": false,
 "borderSize": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "data": {
  "name": "IconButton X"
 },
 "paddingLeft": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "class": "IconButton",
 "horizontalAlign": "right",
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "backgroundOpacity": 0,
 "width": "100%",
 "maxHeight": 60,
 "right": 20,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "propagateClick": false,
 "paddingRight": 0,
 "top": 20,
 "minWidth": 50,
 "verticalAlign": "top",
 "mode": "push",
 "height": "36.14%",
 "shadow": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "transparencyActive": false,
 "borderSize": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "data": {
  "name": "IconButton X"
 },
 "paddingLeft": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "class": "Image",
 "horizontalAlign": "center",
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "width": "100%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "maxHeight": 1000,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "verticalAlign": "bottom",
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image"
 },
 "paddingLeft": 0,
 "maxWidth": 2000
},
{
 "class": "Container",
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "creationPolicy": "inAdvance",
 "height": 60,
 "borderSize": 0,
 "shadow": false,
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "minWidth": 1,
 "paddingLeft": 0,
 "layout": "horizontal"
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 520,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "minWidth": 100,
 "shadow": false,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 30,
 "contentOpaque": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "height": "100%",
 "paddingLeft": 0,
 "layout": "vertical"
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "creationPolicy": "inAdvance",
 "height": 40,
 "borderSize": 0,
 "shadow": false,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "minWidth": 1,
 "paddingLeft": 0,
 "layout": "horizontal"
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_01909AD0_15B3_012D_41A4_CF140E7E8C24",
 "left": "0%",
 "children": [
  "this.Image_01908AD0_15B3_012D_4183_D3500EC893D0",
  "this.Container_01917AD0_15B3_012D_4180_35816D0C5DC5",
  "this.Container_019E1AD1_15B3_012F_41B2_82F12723931A",
  "this.Container_0191CAD2_15B3_012D_4192_D00F9E7A54EC",
  "this.Container_01911AD3_15B3_06D3_41B2_CD2709B7F8EC",
  "this.Container_019EBAD4_15B3_06D5_41A4_E854191E951E",
  "this.Container_019ECAD5_15B3_06D7_41AD_884E75E44ECC",
  "this.Container_019F8AD5_15B3_06D7_41A1_A790BA9B16C7",
  "this.Container_019FBAD6_15B3_06D5_41B1_2650D1BB7365"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "paddingRight": 40,
 "top": "0%",
 "backgroundColor": [
  "#000000"
 ],
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "minWidth": 1,
 "borderSize": 0,
 "shadow": false,
 "paddingTop": 40,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 40,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- Buttons set"
 },
 "height": "100%",
 "paddingLeft": 40,
 "layout": "absolute"
},
{
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 0,
 "minWidth": 1,
 "height": "45%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:7.21vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.61vh;font-family:'Montserrat';\"><B>LOREM IPSUM</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.61vh;font-family:'Montserrat';\"><B>DOLOR SIT AMET</B></SPAN></SPAN></DIV></div>",
 "paddingBottom": 10,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText18899"
 },
 "paddingLeft": 0
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "backgroundOpacity": 0.3,
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "minWidth": 1,
 "shadow": false,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- content"
 },
 "height": "80%",
 "paddingLeft": 0,
 "layout": "horizontal"
},
{
 "class": "Image",
 "horizontalAlign": "left",
 "id": "Image_01908AD0_15B3_012D_4183_D3500EC893D0",
 "left": "0%",
 "width": "100%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "maxHeight": 1095,
 "url": "skin/Image_01908AD0_15B3_012D_4183_D3500EC893D0.jpg",
 "minHeight": 30,
 "propagateClick": true,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 40,
 "verticalAlign": "top",
 "height": "17.725%",
 "shadow": false,
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "foto menu"
 },
 "paddingLeft": 0,
 "maxWidth": 1095
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_01917AD0_15B3_012D_4180_35816D0C5DC5",
 "backgroundOpacity": 0,
 "children": [
  "this.Container_01916AD0_15B3_012D_4193_F9707FED3A92",
  "this.Button_01914AD0_15B3_012D_41A9_DE493BD00A3C",
  "this.Container_01912AD0_15B3_012D_41B2_E5100E72219A",
  "this.Button_01911AD0_15B3_012D_41B2_F177225698E8",
  "this.Container_01910AD0_15B3_012D_411C_3E1C98FB0B80",
  "this.Button_0191FAD0_15B3_012D_41A9_7E1E2116C7D6",
  "this.Container_0191CAD0_15B3_012D_4161_1701203D6160",
  "this.Button_0191AAD1_15B3_012F_4173_4C5EEA123B60",
  "this.Container_01918AD1_15B3_012F_41B3_B46F57FAE39C",
  "this.Button_019E6AD1_15B3_012F_41AD_9812AD682EDE",
  "this.Container_019E5AD1_15B3_012F_4175_1D8241EB1156",
  "this.Button_019E4AD1_15B3_012F_41AB_E2D41018273C",
  "this.Container_019E3AD1_15B3_012F_41B5_071844FDCFB8"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "propagateClick": true,
 "paddingRight": 0,
 "top": "26%",
 "verticalAlign": "middle",
 "bottom": "26%",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarWidth": 10,
 "shadow": false,
 "paddingTop": 0,
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Level 1"
 },
 "paddingLeft": 0,
 "layout": "vertical"
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_019E1AD1_15B3_012F_41B2_82F12723931A",
 "left": "0%",
 "children": [
  "this.Container_0190DAD1_15B3_012F_41B1_47D47312C4EE",
  "this.HTMLText_0190CAD1_15B3_012F_4188_40A259B19E0E",
  "this.Container_0190BAD1_15B3_012F_41B3_CE0B3CCD1EA8",
  "this.Container_01914AD2_15B3_012D_4198_15A8FEE4B9EE"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "verticalAlign": "bottom",
 "bottom": "0%",
 "height": 130,
 "creationPolicy": "inAdvance",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "shadow": false,
 "paddingTop": 0,
 "gap": 5,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "icones abaixo"
 },
 "paddingLeft": 0,
 "layout": "vertical"
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0191CAD2_15B3_012D_4192_D00F9E7A54EC",
 "left": "0%",
 "children": [
  "this.Button_01919AD2_15B3_012D_419A_5C8ACA480370",
  "this.Container_01918AD2_15B3_012D_4193_56AA1895BEFA",
  "this.Container_019E7AD2_15B3_012D_4185_FE9E8F895822",
  "this.Button_019E5AD2_15B3_012D_4193_00BE375FBBF9",
  "this.Button_0190DAD3_15B3_06D3_41B4_4CC20173AE27",
  "this.Button_01909AD3_15B3_06D3_4199_513CE1AB6998",
  "this.Button_01913AD3_15B3_06D3_41A8_67AFC6E72AFE",
  "this.Button_01912AD3_15B3_06D3_41B2_59EB4E78309D"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "top": "25%",
 "verticalAlign": "middle",
 "bottom": "25%",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarWidth": 10,
 "borderSize": 0,
 "shadow": false,
 "paddingTop": 0,
 "gap": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Level 2-1"
 },
 "paddingLeft": 0,
 "visible": false,
 "layout": "vertical"
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_01911AD3_15B3_06D3_41B2_CD2709B7F8EC",
 "left": "0%",
 "children": [
  "this.Button_0191FAD3_15B3_06D3_41A8_068ECC23D278",
  "this.Container_0191DAD3_15B3_06D3_41AF_760FD138A907",
  "this.Container_0191CAD3_15B3_06D3_419C_523E1B7D5016",
  "this.Button_0191BAD3_15B3_06D3_4192_E5812AB64762",
  "this.Button_019E6AD3_15B3_06D3_41B4_5C838E807EFC",
  "this.Button_019E4AD3_15B3_06D3_41B4_A309163BE860",
  "this.Button_019E2AD3_15B3_06D3_4190_1B66B285C6EF",
  "this.Button_019E1AD4_15B3_06D5_41A4_0754830C37CB",
  "this.Button_019EFAD4_15B3_06D5_41B1_276F4FE3F1A8",
  "this.Button_019EDAD4_15B3_06D5_41A3_13FDCB9D0B0D",
  "this.Button_019ECAD4_15B3_06D5_41AE_4B7E7164E0BC"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "top": "25%",
 "verticalAlign": "middle",
 "bottom": "25%",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarWidth": 10,
 "borderSize": 0,
 "shadow": false,
 "paddingTop": 0,
 "gap": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Level 2-2"
 },
 "paddingLeft": 0,
 "visible": false,
 "layout": "vertical"
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_019EBAD4_15B3_06D5_41A4_E854191E951E",
 "left": "0%",
 "children": [
  "this.Button_019E9AD4_15B3_06D5_418D_AA56A5576C0C",
  "this.Container_019E8AD4_15B3_06D5_41B5_5B2681E32370",
  "this.Container_019F5AD4_15B3_06D5_41B4_3AE356B675D1",
  "this.Button_019F3AD4_15B3_06D5_4194_BFDEECD5BDE6",
  "this.Button_019F1AD4_15B3_06D5_41A9_E531F2BDDD30",
  "this.Button_019FFAD4_15B3_06D5_41AE_30D8F28AA138",
  "this.Button_019FDAD4_15B3_06D5_41AF_3F084A202F9F",
  "this.Button_019FCAD4_15B3_06D5_4193_1FD9B63A858D",
  "this.Button_019FAAD4_15B3_06D5_4198_48435E0F9AA2",
  "this.Button_019F9AD4_15B3_06D5_419F_F8559E1DA76C",
  "this.Button_019F8AD4_15B3_06D5_4166_3AF93FC111D5",
  "this.Button_019C7AD4_15B3_06D5_41AA_1D4135D39551",
  "this.Button_019C5AD4_15B3_06D5_41B4_B339DE65DA7E"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "top": "25%",
 "verticalAlign": "middle",
 "bottom": "25%",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarWidth": 10,
 "borderSize": 0,
 "shadow": false,
 "paddingTop": 0,
 "gap": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Level 2-3"
 },
 "paddingLeft": 0,
 "visible": false,
 "layout": "vertical"
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_019ECAD5_15B3_06D7_41AD_884E75E44ECC",
 "left": "0%",
 "children": [
  "this.Button_019EBAD5_15B3_06D7_41B4_F376C582D6D8",
  "this.Container_019EAAD5_15B3_06D7_4192_017401BDA041",
  "this.Container_019E9AD5_15B3_06D7_4192_E78BBCC255CE",
  "this.Button_019E8AD5_15B3_06D7_41B1_BB7B0CB25A54",
  "this.Button_019F5AD5_15B3_06D7_41B4_9D652939C06F",
  "this.Button_019F4AD5_15B3_06D7_419C_337FB9F53059",
  "this.Button_019F2AD5_15B3_06D7_41AE_09798ADD4689",
  "this.Button_019F1AD5_15B3_06D7_4198_A221B465DCFD",
  "this.Button_019FFAD5_15B3_06D7_41A6_F62979B9A1BC",
  "this.Button_019FEAD5_15B3_06D7_4196_A6F104812919",
  "this.Button_019FDAD5_15B3_06D7_41A8_2B5F47AD70D9",
  "this.Button_019FAAD5_15B3_06D7_41A4_991B88888A16",
  "this.Button_019F9AD5_15B3_06D7_4180_69F62A960366"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "top": "25%",
 "verticalAlign": "middle",
 "bottom": "25%",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarWidth": 10,
 "borderSize": 0,
 "shadow": false,
 "paddingTop": 0,
 "gap": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Level 2-4"
 },
 "paddingLeft": 0,
 "visible": false,
 "layout": "vertical"
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_019F8AD5_15B3_06D7_41A1_A790BA9B16C7",
 "left": "0%",
 "children": [
  "this.Button_019C7AD5_15B3_06D7_41A7_1408E3FEF71A",
  "this.Container_019C6AD5_15B3_06D7_4197_BF081A05C3A2",
  "this.Container_019C4AD6_15B3_06D5_4168_E27DADCD3AD4",
  "this.Button_019ECAD6_15B3_06D5_416D_1687833B42E9",
  "this.Button_019E9AD6_15B3_06D5_41A7_B4BBB1C60558",
  "this.Button_019E8AD6_15B3_06D5_41B4_26EA5B64CF7F",
  "this.Button_019F5AD6_15B3_06D5_41A8_A4FC036903F8",
  "this.Button_019F4AD6_15B3_06D5_418E_043CF4B11C07",
  "this.Button_019F2AD6_15B3_06D5_41A0_3B92052A713C",
  "this.Button_019F1AD6_15B3_06D5_41B1_2693B5155849",
  "this.Button_019FFAD6_15B3_06D5_41A8_867F8063C8AD",
  "this.Button_019FEAD6_15B3_06D5_41A3_4DE2D11411FC",
  "this.Button_019FDAD6_15B3_06D5_41A6_709474EB924D"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "top": "25%",
 "verticalAlign": "middle",
 "bottom": "25%",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarWidth": 10,
 "borderSize": 0,
 "shadow": false,
 "paddingTop": 0,
 "gap": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Level 2-5"
 },
 "paddingLeft": 0,
 "visible": false,
 "layout": "vertical"
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_019FBAD6_15B3_06D5_41B1_2650D1BB7365",
 "left": "0%",
 "children": [
  "this.Button_019F8AD6_15B3_06D5_41B0_0BD455EA13EA",
  "this.Container_019C7AD6_15B3_06D5_41AB_A248777D7B8F",
  "this.Container_019C6AD6_15B3_06DF_4182_B25E25F61C76",
  "this.Button_019C5ADC_15B3_06D5_41B0_C81D9ED6E754",
  "this.Button_019C3ADC_15B3_06D5_4182_ABEC911308D2",
  "this.Button_019C1ADC_15B3_06D5_4166_AE4C3CD8F622",
  "this.Button_019C0ADC_15B3_06D5_41A1_1D1FF950523D",
  "this.Button_019CFADC_15B3_06D5_41A5_96B7A1BAA54C",
  "this.Button_019CDADC_15B3_06D5_41AA_34292DB44349",
  "this.Button_019CCADC_15B3_06D5_41A5_BF7F012121C5",
  "this.Button_019CAADC_15B3_06D6_41AE_1862914F9B8E",
  "this.Button_019D7ADD_15B3_06D7_41AD_34D3E8683907",
  "this.Button_019D5ADD_15B3_06D7_41A0_7A84FCF6DE67"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "top": "25%",
 "verticalAlign": "middle",
 "bottom": "25%",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarWidth": 10,
 "borderSize": 0,
 "shadow": false,
 "paddingTop": 0,
 "gap": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Level 2-6"
 },
 "paddingLeft": 0,
 "visible": false,
 "layout": "vertical"
},
{
 "class": "Image",
 "horizontalAlign": "left",
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "backgroundOpacity": 0,
 "width": "25%",
 "maxHeight": 200,
 "borderRadius": 0,
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "height": "100%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "agent photo"
 },
 "paddingLeft": 0,
 "maxWidth": 200
},
{
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "backgroundOpacity": 0,
 "width": "75%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "minWidth": 1,
 "height": "100%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:1.97vh;font-family:'Montserrat';\"><B>JOHN DOE</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.64vh;font-family:'Montserrat';\">LICENSED REAL ESTATE SALESPERSON</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">Tlf.: +11 111 111 111</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">jhondoe@realestate.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">www.loremipsum.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "paddingBottom": 10,
 "scrollBarColor": "#F7931E",
 "data": {
  "name": "HTMLText19460"
 },
 "paddingLeft": 10
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_01916AD0_15B3_012D_4193_F9707FED3A92",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "creationPolicy": "inAdvance",
 "height": 1,
 "borderSize": 0,
 "shadow": false,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "minWidth": 1,
 "paddingLeft": 0,
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "id": "Button_01914AD0_15B3_012D_41A9_DE493BD00A3C",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "click": "this.setComponentVisibility(this.Container_01917AD0_15B3_012D_4180_35816D0C5DC5, false, 0, this.effect_2A237CC9_317A_007D_4176_36E090D2269C, 'hideEffect', false); this.setComponentVisibility(this.Container_0191CAD2_15B3_012D_4192_D00F9E7A54EC, true, 0, this.effect_1A65691F_310E_0014_41BF_C2605660352F, 'showEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 50,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Entrada >",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button Tour Info"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_01912AD0_15B3_012D_41B2_E5100E72219A",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "creationPolicy": "inAdvance",
 "height": 1,
 "borderSize": 0,
 "shadow": false,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "minWidth": 1,
 "paddingLeft": 0,
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "id": "Button_01911AD0_15B3_012D_41B2_F177225698E8",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "click": "this.setComponentVisibility(this.Container_01917AD0_15B3_012D_4180_35816D0C5DC5, false, 0, this.effect_2A207F1A_3106_001F_41C1_5AE5FDDFBEDD, 'hideEffect', false); this.setComponentVisibility(this.Container_01911AD3_15B3_06D3_41B2_CD2709B7F8EC, true, 0, this.effect_1836A9FB_310E_001D_41C1_0750F03CB784, 'showEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 50,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "\u00c1rea de Churrasco >",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 23,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "normal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button Panorama List"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_01910AD0_15B3_012D_411C_3E1C98FB0B80",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "creationPolicy": "inAdvance",
 "height": 1,
 "borderSize": 0,
 "shadow": false,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "minWidth": 1,
 "paddingLeft": 0,
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "pressedLabel": "Inserdt Text",
 "id": "Button_0191FAD0_15B3_012D_41A9_7E1E2116C7D6",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "click": "this.setComponentVisibility(this.Container_01917AD0_15B3_012D_4180_35816D0C5DC5, false, 0, this.effect_112869ED_311E_0034_41C2_70A247245BB7, 'hideEffect', false); this.setComponentVisibility(this.Container_019EBAD4_15B3_06D5_41A4_E854191E951E, true, 0, this.effect_18BBC752_310E_006C_41B5_0D8B802FB057, 'showEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 50,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "A\u00e7ougue >",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "normal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button Location"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0191CAD0_15B3_012D_4161_1701203D6160",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "creationPolicy": "inAdvance",
 "height": 1,
 "borderSize": 0,
 "shadow": false,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "minWidth": 1,
 "paddingLeft": 0,
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "id": "Button_0191AAD1_15B3_012F_4173_4C5EEA123B60",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "click": "this.setComponentVisibility(this.Container_01917AD0_15B3_012D_4180_35816D0C5DC5, false, 0, this.effect_2EF4EDF2_311A_002F_41B7_7476A5CB22BB, 'hideEffect', false); this.setComponentVisibility(this.Container_019ECAD5_15B3_06D7_41AD_884E75E44ECC, true, 0, this.effect_163FEAB2_310E_002C_416A_B20913F49C44, 'showEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 50,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Circula\u00e7ao >",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "normal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button Floorplan"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_01918AD1_15B3_012F_41B3_B46F57FAE39C",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "creationPolicy": "inAdvance",
 "height": 1,
 "borderSize": 0,
 "shadow": false,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "minWidth": 1,
 "paddingLeft": 0,
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "id": "Button_019E6AD1_15B3_012F_41AD_9812AD682EDE",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "click": "this.setComponentVisibility(this.Container_01917AD0_15B3_012D_4180_35816D0C5DC5, false, 0, this.effect_164A1542_310E_006C_41C8_B7C2AB9D709D, 'hideEffect', false); this.setComponentVisibility(this.Container_019F8AD5_15B3_06D7_41A1_A790BA9B16C7, true, 0, this.effect_19F0E9E8_310A_003B_41C2_00E6E4570ABD, 'showEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 50,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Bebidas >",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "normal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button Photoalbum"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_019E5AD1_15B3_012F_4175_1D8241EB1156",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "creationPolicy": "inAdvance",
 "height": 1,
 "borderSize": 0,
 "shadow": false,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "minWidth": 1,
 "paddingLeft": 0,
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "id": "Button_019E4AD1_15B3_012F_41AB_E2D41018273C",
 "backgroundOpacity": 0,
 "width": "73.064%",
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "click": "this.setComponentVisibility(this.Container_01917AD0_15B3_012D_4180_35816D0C5DC5, false, 0, this.effect_18885C2A_310A_003C_41B2_9B60A3A66C9F, 'hideEffect', false); this.setComponentVisibility(this.Container_019FBAD6_15B3_06D5_41B1_2650D1BB7365, true, 0, this.effect_1622AA86_310A_00F4_41A8_DBA0885BA83A, 'showEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 50,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lanches e Caf\u00e9 >",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "normal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button Contact"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_019E3AD1_15B3_012F_41B5_071844FDCFB8",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "creationPolicy": "inAdvance",
 "height": 1,
 "borderSize": 0,
 "shadow": false,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "minWidth": 1,
 "paddingLeft": 0,
 "layout": "absolute"
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0190DAD1_15B3_012F_41B1_47D47312C4EE",
 "backgroundOpacity": 1,
 "width": 40,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#5CA1DE"
 ],
 "creationPolicy": "inAdvance",
 "height": 2,
 "borderSize": 0,
 "shadow": false,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "blue line"
 },
 "minWidth": 1,
 "paddingLeft": 0,
 "layout": "horizontal"
},
{
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_0190CAD1_15B3_012F_4188_40A259B19E0E",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "paddingRight": 0,
 "height": 78,
 "minWidth": 1,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText47602"
 },
 "paddingLeft": 0,
 "visible": false
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0190BAD1_15B3_012F_41B3_CE0B3CCD1EA8",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 0,
 "verticalAlign": "bottom",
 "height": 56,
 "creationPolicy": "inAdvance",
 "minWidth": 1,
 "shadow": false,
 "borderSize": 0,
 "gap": 7,
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container Icons 1"
 },
 "paddingLeft": 0,
 "layout": "horizontal"
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_01914AD2_15B3_012D_4198_15A8FEE4B9EE",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_01908AD1_15B3_012F_4176_378DFE120F07",
  "this.IconButton_01917AD2_15B3_012D_4196_1F2FD1389C3F",
  "this.IconButton_01916AD2_15B3_012D_4154_F399CB279B5C",
  "this.IconButton_0191DAD2_15B3_012D_41B1_232AAE602A81",
  "this.IconButton_EB801D46_FB77_05C5_41EC_84262D870B55"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 0,
 "verticalAlign": "top",
 "height": 44,
 "creationPolicy": "inAdvance",
 "minWidth": 1,
 "shadow": false,
 "borderSize": 0,
 "gap": 7,
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container Icons 2"
 },
 "paddingLeft": 0,
 "layout": "horizontal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "iconURL": "skin/Button_01919AD2_15B3_012D_419A_5C8ACA480370.png",
 "horizontalAlign": "left",
 "id": "Button_01919AD2_15B3_012D_419A_5C8ACA480370",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_0191CAD2_15B3_012D_4192_D00F9E7A54EC, false, 0, this.effect_27C1F008_310D_FFFB_41A2_B5C1794EE5C9, 'hideEffect', false); this.setComponentVisibility(this.Container_01917AD0_15B3_012D_4180_35816D0C5DC5, true, 0, this.effect_268FAF4D_310E_0075_4179_B2B3CFC7C47E, 'showEffect', false)",
 "iconHeight": 30,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverIconURL": "skin/Button_01919AD2_15B3_012D_419A_5C8ACA480370_rollover.png",
 "propagateClick": true,
 "rollOverFontFamily": "Oswald",
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 50,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "rollOverFontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Voltar",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 5,
 "data": {
  "name": "voltaar"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 30,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_01918AD2_15B3_012D_4193_56AA1895BEFA",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "creationPolicy": "inAdvance",
 "height": 1,
 "borderSize": 0,
 "shadow": false,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "minWidth": 1,
 "paddingLeft": 0,
 "layout": "absolute"
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_019E7AD2_15B3_012D_4185_FE9E8F895822",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "paddingRight": 0,
 "verticalAlign": "top",
 "height": 8,
 "creationPolicy": "inAdvance",
 "minWidth": 1,
 "shadow": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line separator"
 },
 "paddingLeft": 0,
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "id": "Button_019E5AD2_15B3_012D_4193_00BE375FBBF9",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.mainPlayList.set('selectedIndex', 1)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Frente",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 23,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "frente"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "pressedLabel": "Reception",
 "id": "Button_0190DAD3_15B3_06D3_41B4_4CC20173AE27",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_01901AD0_15B3_012D_41A6_7B893D31B52C, true, 0, this.effect_6F934347_7EFD_C46C_41CD_98E4D1803E93, 'showEffect', false); this.setComponentVisibility(this.Container_0190CAD0_15B3_012D_41AD_0A2F0B19D711, false, 0, this.effect_6E417DE0_7EFD_DC24_41C1_9DAD95E670ED, 'hideEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Reception",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "visible": false,
 "data": {
  "name": "Button text 3"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "id": "Button_01909AD3_15B3_06D3_4199_513CE1AB6998",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_01901AD0_15B3_012D_41A6_7B893D31B52C, true, 0, this.effect_6E1D1A84_7EFC_44EC_41D2_A7D7A6578CE1, 'showEffect', false); this.setComponentVisibility(this.Container_0190CAD0_15B3_012D_41AD_0A2F0B19D711, false, 0, this.effect_6F6D4344_7EFD_C463_41DC_2E289C95FE19, 'hideEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Bar",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "visible": false,
 "data": {
  "name": "Button text 6"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "id": "Button_01913AD3_15B3_06D3_41A8_67AFC6E72AFE",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_01901AD0_15B3_012D_41A6_7B893D31B52C, true, 0, this.effect_6C4FA978_7EFC_C424_41DA_519605965466, 'showEffect', false); this.setComponentVisibility(this.Container_0190CAD0_15B3_012D_41AD_0A2F0B19D711, false, 0, this.effect_6F36D593_7EFC_4CE4_41C0_C765037E8ABF, 'hideEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Garden",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 0,
 "visible": false,
 "data": {
  "name": "Button text 9"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_01912AD3_15B3_06D3_41B2_59EB4E78309D",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_01901AD0_15B3_012D_41A6_7B893D31B52C, true, 0, this.effect_6C9A8F04_7EFC_7DEC_4197_07A12DF6DE72, 'showEffect', false); this.setComponentVisibility(this.Container_0190CAD0_15B3_012D_41AD_0A2F0B19D711, false, 0, this.effect_6F0C2178_7EF3_C424_41DB_BFCD7CE82F8B, 'hideEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 0,
 "visible": false,
 "data": {
  "name": "Button text 10"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "iconURL": "skin/Button_0191FAD3_15B3_06D3_41A8_068ECC23D278.png",
 "horizontalAlign": "left",
 "id": "Button_0191FAD3_15B3_06D3_41A8_068ECC23D278",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_01911AD3_15B3_06D3_41B2_CD2709B7F8EC, false, 0, this.effect_27C1F008_310D_FFFB_41A2_B5C1794EE5C9, 'hideEffect', false); this.setComponentVisibility(this.Container_01917AD0_15B3_012D_4180_35816D0C5DC5, true, 0, this.effect_268FAF4D_310E_0075_4179_B2B3CFC7C47E, 'showEffect', false)",
 "iconHeight": 30,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverIconURL": "skin/Button_0191FAD3_15B3_06D3_41A8_068ECC23D278_rollover.png",
 "propagateClick": true,
 "rollOverFontFamily": "Oswald",
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 50,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "rollOverFontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Voltar",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 5,
 "data": {
  "name": "voltar"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 30,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0191DAD3_15B3_06D3_41AF_760FD138A907",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "creationPolicy": "inAdvance",
 "height": 1,
 "borderSize": 0,
 "shadow": false,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "minWidth": 1,
 "paddingLeft": 0,
 "layout": "absolute"
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0191CAD3_15B3_06D3_419C_523E1B7D5016",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "paddingRight": 0,
 "verticalAlign": "top",
 "height": 8,
 "creationPolicy": "inAdvance",
 "minWidth": 1,
 "shadow": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line separator"
 },
 "paddingLeft": 0,
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "id": "Button_0191BAD3_15B3_06D3_4192_E5812AB64762",
 "backgroundOpacity": 0,
 "rollOverShadow": false,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.mainPlayList.set('selectedIndex', 2)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverShadowBlurRadius": 18,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Foto",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Foto"
 },
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "id": "Button_019E6AD3_15B3_06D3_41B4_5C838E807EFC",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_01901AD0_15B3_012D_41A6_7B893D31B52C, true, 0, this.effect_898428F2_9493_0835_41DD_CCF2E926B3B1, 'showEffect', false); this.setComponentVisibility(this.Container_0190CAD0_15B3_012D_41AD_0A2F0B19D711, false, 0, this.effect_8A954146_9497_385C_41BA_68B31A1C0575, 'hideEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "visible": false,
 "data": {
  "name": "Button text 4"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "id": "Button_019E4AD3_15B3_06D3_41B4_A309163BE860",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_01901AD0_15B3_012D_41A6_7B893D31B52C, true, 0, this.effect_898D54CF_9493_386B_41C9_EE8C51220E79, 'showEffect', false); this.setComponentVisibility(this.Container_0190CAD0_15B3_012D_41AD_0A2F0B19D711, false, 0, this.effect_897E419E_9497_78EC_41C6_F0A57FA56749, 'hideEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "visible": false,
 "data": {
  "name": "Button text 5"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "id": "Button_019E2AD3_15B3_06D3_4190_1B66B285C6EF",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_01901AD0_15B3_012D_41A6_7B893D31B52C, true, 0, this.effect_8A231913_9493_09FB_41D0_61CBD047CA49, 'showEffect', false); this.setComponentVisibility(this.Container_0190CAD0_15B3_012D_41AD_0A2F0B19D711, false, 0, this.effect_8B8DA8FA_9497_0834_41D5_EEF8CA41DCE2, 'hideEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "visible": false,
 "data": {
  "name": "Button text 6"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "id": "Button_019E1AD4_15B3_06D5_41A4_0754830C37CB",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_01901AD0_15B3_012D_41A6_7B893D31B52C, true, 0, this.effect_8AB97F8A_9493_08D5_41E0_203E1AE10860, 'showEffect', false); this.setComponentVisibility(this.Container_0190CAD0_15B3_012D_41AD_0A2F0B19D711, false, 0, this.effect_8822E8AA_9497_08D5_4174_26CC5E1E4686, 'hideEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "visible": false,
 "data": {
  "name": "Button text 7"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "id": "Button_019EFAD4_15B3_06D5_41B1_276F4FE3F1A8",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_01901AD0_15B3_012D_41A6_7B893D31B52C, true, 0, this.effect_8BAF5302_9493_39D5_41C8_B519ABDBC4E9, 'showEffect', false); this.setComponentVisibility(this.Container_0190CAD0_15B3_012D_41AD_0A2F0B19D711, false, 0, this.effect_899FD635_9491_183F_41D0_7002C81DFC77, 'hideEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "visible": false,
 "data": {
  "name": "Button text 8"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "id": "Button_019EDAD4_15B3_06D5_41A3_13FDCB9D0B0D",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_01901AD0_15B3_012D_41A6_7B893D31B52C, true, 0, this.effect_89C6CE9B_9493_08F4_41D0_6FC7289F89C4, 'showEffect', false); this.setComponentVisibility(this.Container_0190CAD0_15B3_012D_41AD_0A2F0B19D711, false, 0, this.effect_8AEC3735_9491_383F_41E0_CF7CBACF3F83, 'hideEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "visible": false,
 "data": {
  "name": "Button text 9"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_019ECAD4_15B3_06D5_41AE_4B7E7164E0BC",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_01901AD0_15B3_012D_41A6_7B893D31B52C, true, 0, this.effect_896FA3EA_9493_3854_41BE_C6AF134EA53D, 'showEffect', false); this.setComponentVisibility(this.Container_0190CAD0_15B3_012D_41AD_0A2F0B19D711, false, 0, this.effect_88058052_9491_F874_41C8_DB3349E1BEE1, 'hideEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "visible": false,
 "data": {
  "name": "Button text 10"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "iconURL": "skin/Button_019E9AD4_15B3_06D5_418D_AA56A5576C0C.png",
 "horizontalAlign": "left",
 "id": "Button_019E9AD4_15B3_06D5_418D_AA56A5576C0C",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_019EBAD4_15B3_06D5_41A4_E854191E951E, false, 0, this.effect_27C1F008_310D_FFFB_41A2_B5C1794EE5C9, 'hideEffect', false); this.setComponentVisibility(this.Container_01917AD0_15B3_012D_4180_35816D0C5DC5, true, 0, this.effect_268FAF4D_310E_0075_4179_B2B3CFC7C47E, 'showEffect', false)",
 "iconHeight": 30,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverIconURL": "skin/Button_019E9AD4_15B3_06D5_418D_AA56A5576C0C_rollover.png",
 "propagateClick": true,
 "rollOverFontFamily": "Oswald",
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 50,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "rollOverFontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Voltar",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 5,
 "data": {
  "name": "Voltar"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 30,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_019E8AD4_15B3_06D5_41B5_5B2681E32370",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "creationPolicy": "inAdvance",
 "height": 1,
 "borderSize": 0,
 "shadow": false,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "minWidth": 1,
 "paddingLeft": 0,
 "layout": "absolute"
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_019F5AD4_15B3_06D5_41B4_3AE356B675D1",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "paddingRight": 0,
 "verticalAlign": "top",
 "height": 8,
 "creationPolicy": "inAdvance",
 "minWidth": 1,
 "shadow": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line separator"
 },
 "paddingLeft": 0,
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "id": "Button_019F3AD4_15B3_06D5_4194_BFDEECD5BDE6",
 "backgroundOpacity": 0,
 "rollOverShadow": false,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.mainPlayList.set('selectedIndex', 3)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverShadowBlurRadius": 18,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Foto",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Foto"
 },
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "id": "Button_019F1AD4_15B3_06D5_41A9_E531F2BDDD30",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_01901AD0_15B3_012D_41A6_7B893D31B52C, true, 0, this.effect_8B839F4E_9491_086D_41C7_7BE21F22B2B4, 'showEffect', false); this.setComponentVisibility(this.Container_0190CAD0_15B3_012D_41AD_0A2F0B19D711, false, 0, this.effect_8AE5EAF6_9491_083D_41DB_CA2F71BBCDC1, 'hideEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 23,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "visible": false,
 "data": {
  "name": "Button text 2"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "pressedLabel": "Lorem Ipsum",
 "id": "Button_019FFAD4_15B3_06D5_41AE_30D8F28AA138",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_01901AD0_15B3_012D_41A6_7B893D31B52C, true, 0, this.effect_B5F508CE_9491_086D_41E1_D7C227D4EE39, 'showEffect', false); this.setComponentVisibility(this.Container_0190CAD0_15B3_012D_41AD_0A2F0B19D711, false, 0, this.effect_B481A4D6_9491_387D_41CF_8034E66B72D2, 'hideEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "visible": false,
 "data": {
  "name": "Button text 3"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "id": "Button_019FDAD4_15B3_06D5_41AF_3F084A202F9F",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_01901AD0_15B3_012D_41A6_7B893D31B52C, true, 0, this.effect_8AA69BBF_9491_082C_419F_18F08AED488F, 'showEffect', false); this.setComponentVisibility(this.Container_0190CAD0_15B3_012D_41AD_0A2F0B19D711, false, 0, this.effect_8A79E75A_949F_1874_41DB_B8859D03684A, 'hideEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "visible": false,
 "data": {
  "name": "Button text 4"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "id": "Button_019FCAD4_15B3_06D5_4193_1FD9B63A858D",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_01901AD0_15B3_012D_41A6_7B893D31B52C, true, 0, this.effect_8A1C3F2A_949F_09D5_41E0_2D8A6911EDE7, 'showEffect', false); this.setComponentVisibility(this.Container_0190CAD0_15B3_012D_41AD_0A2F0B19D711, false, 0, this.effect_8B6C9DB3_949F_083B_41CD_C9D467FE2549, 'hideEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "visible": false,
 "data": {
  "name": "Button text 5"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "id": "Button_019FAAD4_15B3_06D5_4198_48435E0F9AA2",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_01901AD0_15B3_012D_41A6_7B893D31B52C, true, 0, this.effect_8B6A412F_949F_382C_41D0_B8EAABFD42EC, 'showEffect', false); this.setComponentVisibility(this.Container_0190CAD0_15B3_012D_41AD_0A2F0B19D711, false, 0, this.effect_8A2EDCC6_949F_085D_41C7_FD6618A3A0DE, 'hideEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "visible": false,
 "data": {
  "name": "Button text 6"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "id": "Button_019F9AD4_15B3_06D5_419F_F8559E1DA76C",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_01901AD0_15B3_012D_41A6_7B893D31B52C, true, 0, this.effect_8B815542_9491_1855_41DA_0BE52A4755F9, 'showEffect', false); this.setComponentVisibility(this.Container_0190CAD0_15B3_012D_41AD_0A2F0B19D711, false, 0, this.effect_8BFC2468_9491_1854_41BF_A5CC5585CF55, 'hideEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "visible": false,
 "data": {
  "name": "Button text 7"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "id": "Button_019F8AD4_15B3_06D5_4166_3AF93FC111D5",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_01901AD0_15B3_012D_41A6_7B893D31B52C, true, 0, this.effect_B5454E96_9491_08FD_41E1_00E88377BCE3, 'showEffect', false); this.setComponentVisibility(this.Container_0190CAD0_15B3_012D_41AD_0A2F0B19D711, false, 0, this.effect_B48232C7_9491_185B_41DA_589BEAD8EFE7, 'hideEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "visible": false,
 "data": {
  "name": "Button text 8"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "id": "Button_019C7AD4_15B3_06D5_41AA_1D4135D39551",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_01901AD0_15B3_012D_41A6_7B893D31B52C, true, 0, this.effect_B4FDAC36_9491_083D_41E1_7356505AC888, 'showEffect', false); this.setComponentVisibility(this.Container_0190CAD0_15B3_012D_41AD_0A2F0B19D711, false, 0, this.effect_B482C092_9491_18F5_41DA_C54078523BC0, 'hideEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "visible": false,
 "data": {
  "name": "Button text 9"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_019C5AD4_15B3_06D5_41B4_B339DE65DA7E",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_01901AD0_15B3_012D_41A6_7B893D31B52C, true, 0, this.effect_B408C7EA_9491_7855_41DD_127E3B34D959, 'showEffect', false); this.setComponentVisibility(this.Container_0190CAD0_15B3_012D_41AD_0A2F0B19D711, false, 0, this.effect_8B6AABCE_9491_086D_41E0_5DCDB3CA3E52, 'hideEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "visible": false,
 "data": {
  "name": "Button text 10"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "iconURL": "skin/Button_019EBAD5_15B3_06D7_41B4_F376C582D6D8.png",
 "horizontalAlign": "left",
 "id": "Button_019EBAD5_15B3_06D7_41B4_F376C582D6D8",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_019ECAD5_15B3_06D7_41AD_884E75E44ECC, false, 0, this.effect_27C1F008_310D_FFFB_41A2_B5C1794EE5C9, 'hideEffect', false); this.setComponentVisibility(this.Container_01917AD0_15B3_012D_4180_35816D0C5DC5, true, 0, this.effect_268FAF4D_310E_0075_4179_B2B3CFC7C47E, 'showEffect', false)",
 "iconHeight": 30,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverIconURL": "skin/Button_019EBAD5_15B3_06D7_41B4_F376C582D6D8_rollover.png",
 "propagateClick": true,
 "rollOverFontFamily": "Oswald",
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 50,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "rollOverFontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Voltar",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 5,
 "data": {
  "name": "volar"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 30,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_019EAAD5_15B3_06D7_4192_017401BDA041",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "creationPolicy": "inAdvance",
 "height": 1,
 "borderSize": 0,
 "shadow": false,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "minWidth": 1,
 "paddingLeft": 0,
 "layout": "absolute"
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_019E9AD5_15B3_06D7_4192_E78BBCC255CE",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "paddingRight": 0,
 "verticalAlign": "top",
 "height": 8,
 "creationPolicy": "inAdvance",
 "minWidth": 1,
 "shadow": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line separator"
 },
 "paddingLeft": 0,
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "id": "Button_019E8AD5_15B3_06D7_41B1_BB7B0CB25A54",
 "backgroundOpacity": 0,
 "rollOverShadow": false,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.mainPlayList.set('selectedIndex', 4)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverShadowBlurRadius": 18,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Foto ",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Foto"
 },
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "id": "Button_019F5AD5_15B3_06D7_41B4_9D652939C06F",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.mainPlayList.set('selectedIndex', 5)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Foto - 2",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 23,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Foto - 2"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "pressedLabel": "Lorem Ipsum",
 "id": "Button_019F4AD5_15B3_06D7_419C_337FB9F53059",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.mainPlayList.set('selectedIndex', 8)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Foto - 3 ",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Foto - 3 "
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "id": "Button_019F2AD5_15B3_06D7_41AE_09798ADD4689",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_01901AD0_15B3_012D_41A6_7B893D31B52C, true, 0, this.effect_B5BD2D9B_9493_08F4_41C4_412B2FF594B4, 'showEffect', false); this.setComponentVisibility(this.Container_0190CAD0_15B3_012D_41AD_0A2F0B19D711, false, 0, this.effect_B568C9B2_9491_0835_41E0_7C027FD6DCB1, 'hideEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "visible": false,
 "data": {
  "name": "Button text 4"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "id": "Button_019F1AD5_15B3_06D7_4198_A221B465DCFD",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_01901AD0_15B3_012D_41A6_7B893D31B52C, true, 0, this.effect_B64D30CB_9491_386B_41DA_342B819E43AC, 'showEffect', false); this.setComponentVisibility(this.Container_0190CAD0_15B3_012D_41AD_0A2F0B19D711, false, 0, this.effect_B6EA9E07_9491_0BDC_41D3_3F6AD3783ABE, 'hideEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "visible": false,
 "data": {
  "name": "Button text 5"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "id": "Button_019FFAD5_15B3_06D7_41A6_F62979B9A1BC",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_01901AD0_15B3_012D_41A6_7B893D31B52C, true, 0, this.effect_B58F2C4F_9491_086B_41C6_A8369D9E7FB0, 'showEffect', false); this.setComponentVisibility(this.Container_0190CAD0_15B3_012D_41AD_0A2F0B19D711, false, 0, this.effect_B539B4C7_9491_185C_419E_962527A957FB, 'hideEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "visible": false,
 "data": {
  "name": "Button text 6"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "id": "Button_019FEAD5_15B3_06D7_4196_A6F104812919",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_01901AD0_15B3_012D_41A6_7B893D31B52C, true, 0, this.effect_B59FFEE6_9491_085D_41D5_8F74C477CA80, 'showEffect', false); this.setComponentVisibility(this.Container_0190CAD0_15B3_012D_41AD_0A2F0B19D711, false, 0, this.effect_B7CA2CC3_9491_085B_41C6_518E9C84FB66, 'hideEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "visible": false,
 "data": {
  "name": "Button text 7"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "id": "Button_019FDAD5_15B3_06D7_41A8_2B5F47AD70D9",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_01901AD0_15B3_012D_41A6_7B893D31B52C, true, 0, this.effect_B67B571B_9491_79F4_41E0_0469A8275BE5, 'showEffect', false); this.setComponentVisibility(this.Container_0190CAD0_15B3_012D_41AD_0A2F0B19D711, false, 0, this.effect_B625A32F_9491_382B_41B3_2E55B1C3018E, 'hideEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "visible": false,
 "data": {
  "name": "Button text 8"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "id": "Button_019FAAD5_15B3_06D7_41A4_991B88888A16",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_01901AD0_15B3_012D_41A6_7B893D31B52C, true, 0, this.effect_B77CFA6F_9491_082B_41E0_D85FC35AABCA, 'showEffect', false); this.setComponentVisibility(this.Container_0190CAD0_15B3_012D_41AD_0A2F0B19D711, false, 0, this.effect_B59EA966_9497_085D_41D4_CC23D3789789, 'hideEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "visible": false,
 "data": {
  "name": "Button text 9"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_019F9AD5_15B3_06D7_4180_69F62A960366",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_01901AD0_15B3_012D_41A6_7B893D31B52C, true, 0, this.effect_B44B5EBB_9497_082B_41D8_6A78A8A73A6D, 'showEffect', false); this.setComponentVisibility(this.Container_0190CAD0_15B3_012D_41AD_0A2F0B19D711, false, 0, this.effect_B6899F1B_9497_09EB_41D0_1592754F094F, 'hideEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "visible": false,
 "data": {
  "name": "Button text 10"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "iconURL": "skin/Button_019C7AD5_15B3_06D7_41A7_1408E3FEF71A.png",
 "horizontalAlign": "left",
 "id": "Button_019C7AD5_15B3_06D7_41A7_1408E3FEF71A",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_019F8AD5_15B3_06D7_41A1_A790BA9B16C7, false, 0, this.effect_27C1F008_310D_FFFB_41A2_B5C1794EE5C9, 'hideEffect', false); this.setComponentVisibility(this.Container_01917AD0_15B3_012D_4180_35816D0C5DC5, true, 0, this.effect_268FAF4D_310E_0075_4179_B2B3CFC7C47E, 'showEffect', false)",
 "iconHeight": 30,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverIconURL": "skin/Button_019C7AD5_15B3_06D7_41A7_1408E3FEF71A_rollover.png",
 "propagateClick": true,
 "rollOverFontFamily": "Oswald",
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 50,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "rollOverFontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Voltar",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 5,
 "data": {
  "name": "voltar"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 30,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_019C6AD5_15B3_06D7_4197_BF081A05C3A2",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "creationPolicy": "inAdvance",
 "height": 1,
 "borderSize": 0,
 "shadow": false,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "minWidth": 1,
 "paddingLeft": 0,
 "layout": "absolute"
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_019C4AD6_15B3_06D5_4168_E27DADCD3AD4",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "paddingRight": 0,
 "verticalAlign": "top",
 "height": 8,
 "creationPolicy": "inAdvance",
 "minWidth": 1,
 "shadow": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line separator"
 },
 "paddingLeft": 0,
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "id": "Button_019ECAD6_15B3_06D5_416D_1687833B42E9",
 "backgroundOpacity": 0,
 "rollOverShadow": false,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.mainPlayList.set('selectedIndex', 6)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverShadowBlurRadius": 18,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Bebidas",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 1"
 },
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "id": "Button_019E9AD6_15B3_06D5_41A7_B4BBB1C60558",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_01901AD0_15B3_012D_41A6_7B893D31B52C, true, 0, this.effect_B09A4863_9491_0854_41D5_538F6C41E041, 'showEffect', false); this.setComponentVisibility(this.Container_0190CAD0_15B3_012D_41AD_0A2F0B19D711, false, 0, this.effect_B70347B8_9491_1834_41C3_6D356CC569AB, 'hideEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 23,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "visible": false,
 "data": {
  "name": "Button text 2"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "pressedLabel": "Lorem Ipsum",
 "id": "Button_019E8AD6_15B3_06D5_41B4_26EA5B64CF7F",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_01901AD0_15B3_012D_41A6_7B893D31B52C, true, 0, this.effect_B0BB10AF_9491_182C_41B8_D3118E6F2E91, 'showEffect', false); this.setComponentVisibility(this.Container_0190CAD0_15B3_012D_41AD_0A2F0B19D711, false, 0, this.effect_B66FC25B_9491_186B_41DD_042FBA348796, 'hideEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "visible": false,
 "data": {
  "name": "Button text 3"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "id": "Button_019F5AD6_15B3_06D5_41A8_A4FC036903F8",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_01901AD0_15B3_012D_41A6_7B893D31B52C, true, 0, this.effect_B60AE61B_9491_3BF4_41DF_19C7BF97DFF0, 'showEffect', false); this.setComponentVisibility(this.Container_0190CAD0_15B3_012D_41AD_0A2F0B19D711, false, 0, this.effect_B681F4A4_9491_78DD_41E2_5B76E3856C13, 'hideEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "visible": false,
 "data": {
  "name": "Button text 4"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "id": "Button_019F4AD6_15B3_06D5_418E_043CF4B11C07",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_01901AD0_15B3_012D_41A6_7B893D31B52C, true, 0, this.effect_B6258D2F_9491_082B_41DE_9AF337AA3DF5, 'showEffect', false); this.setComponentVisibility(this.Container_0190CAD0_15B3_012D_41AD_0A2F0B19D711, false, 0, this.effect_B798BAF7_9491_083B_41E0_72A7199D0D31, 'hideEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "visible": false,
 "data": {
  "name": "Button text 5"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "id": "Button_019F2AD6_15B3_06D5_41A0_3B92052A713C",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_01901AD0_15B3_012D_41A6_7B893D31B52C, true, 0, this.effect_B1CE741F_9493_3FEB_41CC_345874C16FAD, 'showEffect', false); this.setComponentVisibility(this.Container_0190CAD0_15B3_012D_41AD_0A2F0B19D711, false, 0, this.effect_B0C95277_9493_783C_41D6_8FAD5310A7B0, 'hideEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "visible": false,
 "data": {
  "name": "Button text 6"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "id": "Button_019F1AD6_15B3_06D5_41B1_2693B5155849",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_01901AD0_15B3_012D_41A6_7B893D31B52C, true, 0, this.effect_B6DC70EB_9493_3854_41DE_A2CA859C752F, 'showEffect', false); this.setComponentVisibility(this.Container_0190CAD0_15B3_012D_41AD_0A2F0B19D711, false, 0, this.effect_B0859FF2_9493_0835_41DA_F4FB89B321BF, 'hideEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "visible": false,
 "data": {
  "name": "Button text 7"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "id": "Button_019FFAD6_15B3_06D5_41A8_867F8063C8AD",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_01901AD0_15B3_012D_41A6_7B893D31B52C, true, 0, this.effect_B0F48524_9493_19DC_41CD_D6D8B0EC3851, 'showEffect', false); this.setComponentVisibility(this.Container_0190CAD0_15B3_012D_41AD_0A2F0B19D711, false, 0, this.effect_B65E46AF_9493_182B_41DF_8471ED8FC98E, 'hideEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "visible": false,
 "data": {
  "name": "Button text 8"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "id": "Button_019FEAD6_15B3_06D5_41A3_4DE2D11411FC",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_01901AD0_15B3_012D_41A6_7B893D31B52C, true, 0, this.effect_B626EB76_9493_083A_41E0_3863BFDE65E0, 'showEffect', false); this.setComponentVisibility(this.Container_0190CAD0_15B3_012D_41AD_0A2F0B19D711, false, 0, this.effect_B7830787_9493_38DB_41DB_A8E9E94D0517, 'hideEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "visible": false,
 "data": {
  "name": "Button text 9"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_019FDAD6_15B3_06D5_41A6_709474EB924D",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_01901AD0_15B3_012D_41A6_7B893D31B52C, true, 0, this.effect_B6F65D40_9493_0854_41D3_91100B2C991E, 'showEffect', false); this.setComponentVisibility(this.Container_0190CAD0_15B3_012D_41AD_0A2F0B19D711, false, 0, this.effect_B02F7E6B_9491_082B_41CC_A3B8AE1814DE, 'hideEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "visible": false,
 "data": {
  "name": "Button text 10"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "iconURL": "skin/Button_019F8AD6_15B3_06D5_41B0_0BD455EA13EA.png",
 "horizontalAlign": "left",
 "id": "Button_019F8AD6_15B3_06D5_41B0_0BD455EA13EA",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_019FBAD6_15B3_06D5_41B1_2650D1BB7365, false, 0, this.effect_27C1F008_310D_FFFB_41A2_B5C1794EE5C9, 'hideEffect', false); this.setComponentVisibility(this.Container_01917AD0_15B3_012D_4180_35816D0C5DC5, true, 0, this.effect_268FAF4D_310E_0075_4179_B2B3CFC7C47E, 'showEffect', false)",
 "iconHeight": 30,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverIconURL": "skin/Button_019F8AD6_15B3_06D5_41B0_0BD455EA13EA_rollover.png",
 "propagateClick": true,
 "rollOverFontFamily": "Oswald",
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 50,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "rollOverFontSize": 18,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Voltar",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 5,
 "data": {
  "name": "voltar"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 30,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_019C7AD6_15B3_06D5_41AB_A248777D7B8F",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "creationPolicy": "inAdvance",
 "height": 1,
 "borderSize": 0,
 "shadow": false,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "minWidth": 1,
 "paddingLeft": 0,
 "layout": "absolute"
},
{
 "class": "Container",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_019C6AD6_15B3_06DF_4182_B25E25F61C76",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "paddingRight": 0,
 "verticalAlign": "top",
 "height": 8,
 "creationPolicy": "inAdvance",
 "minWidth": 1,
 "shadow": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line separator"
 },
 "paddingLeft": 0,
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "id": "Button_019C5ADC_15B3_06D5_41B0_C81D9ED6E754",
 "backgroundOpacity": 0,
 "rollOverShadow": false,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.mainPlayList.set('selectedIndex', 9)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverShadowBlurRadius": 18,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lanches e Cafe",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "data": {
  "name": "Button text 1"
 },
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "id": "Button_019C3ADC_15B3_06D5_4182_ABEC911308D2",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_01901AD0_15B3_012D_41A6_7B893D31B52C, true, 0, this.effect_B1D80C9F_9491_08EB_41DD_FC28B6347ECB, 'showEffect', false); this.setComponentVisibility(this.Container_0190CAD0_15B3_012D_41AD_0A2F0B19D711, false, 0, this.effect_B04E5807_9491_17DB_41DC_E77570FB08FA, 'hideEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 23,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "visible": false,
 "data": {
  "name": "Button text 2"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "pressedLabel": "Lorem Ipsum",
 "id": "Button_019C1ADC_15B3_06D5_4166_AE4C3CD8F622",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_01901AD0_15B3_012D_41A6_7B893D31B52C, true, 0, this.effect_B34BF78D_94B1_F8EC_41CF_9FD95971A634, 'showEffect', false); this.setComponentVisibility(this.Container_0190CAD0_15B3_012D_41AD_0A2F0B19D711, false, 0, this.effect_B3C94E6D_94B1_082F_41D1_5D861E9658E5, 'hideEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "visible": false,
 "data": {
  "name": "Button text 3"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "id": "Button_019C0ADC_15B3_06D5_41A1_1D1FF950523D",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_01901AD0_15B3_012D_41A6_7B893D31B52C, true, 0, this.effect_B34A3F38_94B1_0834_41DF_0359CC70247E, 'showEffect', false); this.setComponentVisibility(this.Container_0190CAD0_15B3_012D_41AD_0A2F0B19D711, false, 0, this.effect_B3CF3F9D_94B1_08EC_41D9_E24CD7733252, 'hideEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "visible": false,
 "data": {
  "name": "Button text 4"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "id": "Button_019CFADC_15B3_06D5_41A5_96B7A1BAA54C",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_01901AD0_15B3_012D_41A6_7B893D31B52C, true, 0, this.effect_B328B944_94B1_085D_41D2_100952628A44, 'showEffect', false); this.setComponentVisibility(this.Container_0190CAD0_15B3_012D_41AD_0A2F0B19D711, false, 0, this.effect_B3FEF8A1_94B1_08D4_41E1_B824963794F5, 'hideEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "visible": false,
 "data": {
  "name": "Button text 5"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "id": "Button_019CDADC_15B3_06D5_41AA_34292DB44349",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_01901AD0_15B3_012D_41A6_7B893D31B52C, true, 0, this.effect_B265A3B0_94B3_3834_41D1_12F31D8BFE52, 'showEffect', false); this.setComponentVisibility(this.Container_0190CAD0_15B3_012D_41AD_0A2F0B19D711, false, 0, this.effect_B27E5D6D_94B3_082C_41E1_33D169919C25, 'hideEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "visible": false,
 "data": {
  "name": "Button text 6"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "id": "Button_019CCADC_15B3_06D5_41A5_BF7F012121C5",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_01901AD0_15B3_012D_41A6_7B893D31B52C, true, 0, this.effect_B176C187_94B3_18DC_41DD_86A1B3A6D16A, 'showEffect', false); this.setComponentVisibility(this.Container_0190CAD0_15B3_012D_41AD_0A2F0B19D711, false, 0, this.effect_B22B4AA8_94B3_08D5_41E0_E23ACF2CDC21, 'hideEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "visible": false,
 "data": {
  "name": "Button text 7"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "id": "Button_019CAADC_15B3_06D6_41AE_1862914F9B8E",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_01901AD0_15B3_012D_41A6_7B893D31B52C, true, 0, this.effect_BCBF1381_94B1_18D4_41DA_F5BC32E00C21, 'showEffect', false); this.setComponentVisibility(this.Container_0190CAD0_15B3_012D_41AD_0A2F0B19D711, false, 0, this.effect_B21F8580_94B3_18D5_41C5_19BFB320DA74, 'hideEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "visible": false,
 "data": {
  "name": "Button text 8"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "id": "Button_019D7ADD_15B3_06D7_41AD_34D3E8683907",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_01901AD0_15B3_012D_41A6_7B893D31B52C, true, 0, this.effect_B3554030_94B1_3834_41C9_475DE0CD0469, 'showEffect', false); this.setComponentVisibility(this.Container_0190CAD0_15B3_012D_41AD_0A2F0B19D711, false, 0, this.effect_B3F4D89D_94B1_08EC_41A7_AA127AB48C60, 'hideEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "visible": false,
 "data": {
  "name": "Button text 9"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "class": "Button",
 "horizontalAlign": "left",
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_019D5ADD_15B3_06D7_41A0_7A84FCF6DE67",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_01901AD0_15B3_012D_41A6_7B893D31B52C, true, 0, this.effect_B1670F28_94B1_09D5_41A1_2C5A4ED7D4DC, 'showEffect', false); this.setComponentVisibility(this.Container_0190CAD0_15B3_012D_41AD_0A2F0B19D711, false, 0, this.effect_B24695C0_94B1_F855_41D9_964355EF2B59, 'hideEffect', false)",
 "iconHeight": 32,
 "layout": "horizontal",
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "height": 36,
 "borderColor": "#000000",
 "mode": "push",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "fontSize": 18,
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 10,
 "visible": false,
 "data": {
  "name": "Button text 10"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "class": "IconButton",
 "horizontalAlign": "center",
 "id": "IconButton_01908AD1_15B3_012F_4176_378DFE120F07",
 "backgroundOpacity": 0,
 "width": 44,
 "maxHeight": 101,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_01908AD1_15B3_012F_4176_378DFE120F07_rollover.png",
 "propagateClick": false,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "height": 44,
 "mode": "push",
 "minWidth": 1,
 "shadow": false,
 "borderSize": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_01908AD1_15B3_012F_4176_378DFE120F07.png",
 "data": {
  "name": "IconButton Info"
 },
 "paddingLeft": 0,
 "cursor": "hand",
 "maxWidth": 101
},
{
 "class": "IconButton",
 "horizontalAlign": "center",
 "id": "IconButton_01917AD2_15B3_012D_4196_1F2FD1389C3F",
 "backgroundOpacity": 0,
 "width": 44,
 "maxHeight": 101,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_01917AD2_15B3_012D_4196_1F2FD1389C3F_rollover.png",
 "propagateClick": false,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "height": 44,
 "mode": "push",
 "minWidth": 1,
 "shadow": false,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "paddingTop": 0,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_01917AD2_15B3_012D_4196_1F2FD1389C3F.png",
 "data": {
  "name": "IconButton Thumblist"
 },
 "paddingLeft": 0,
 "cursor": "hand",
 "maxWidth": 101
},
{
 "class": "IconButton",
 "horizontalAlign": "center",
 "id": "IconButton_01916AD2_15B3_012D_4154_F399CB279B5C",
 "backgroundOpacity": 0,
 "width": 44,
 "maxHeight": 101,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_01916AD2_15B3_012D_4154_F399CB279B5C_rollover.png",
 "propagateClick": false,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "height": 44,
 "mode": "push",
 "minWidth": 1,
 "shadow": false,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "paddingTop": 0,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_01916AD2_15B3_012D_4154_F399CB279B5C.png",
 "data": {
  "name": "IconButton Location"
 },
 "paddingLeft": 0,
 "cursor": "hand",
 "maxWidth": 101
},
{
 "class": "IconButton",
 "horizontalAlign": "center",
 "id": "IconButton_0191DAD2_15B3_012D_41B1_232AAE602A81",
 "backgroundOpacity": 0,
 "width": 50,
 "maxHeight": 101,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "height": 50,
 "mode": "push",
 "minWidth": 1,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_0191DAD2_15B3_012D_41B1_232AAE602A81_pressed.png",
 "transparencyActive": false,
 "paddingTop": 0,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_0191DAD2_15B3_012D_41B1_232AAE602A81.png",
 "data": {
  "name": "IconButton --"
 },
 "paddingLeft": 0,
 "visible": false,
 "pressedRollOverIconURL": "skin/IconButton_0191DAD2_15B3_012D_41B1_232AAE602A81_pressed_rollover.png",
 "cursor": "hand",
 "maxWidth": 101
},
{
 "class": "IconButton",
 "horizontalAlign": "center",
 "id": "IconButton_EB801D46_FB77_05C5_41EC_84262D870B55",
 "backgroundOpacity": 0,
 "width": 49,
 "maxHeight": 55,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "verticalAlign": "top",
 "height": 39,
 "mode": "push",
 "minWidth": 1,
 "shadow": false,
 "borderSize": 0,
 "transparencyActive": false,
 "click": "this.openLink('https://api.whatsapp.com/send?phone=<a href=\"https://api.whatsapp.com/send?phone=+5597984497279\">Send Message</a>', '_blank')",
 "paddingTop": 0,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_EB801D46_FB77_05C5_41EC_84262D870B55.png",
 "data": {
  "name": "IconButton9499"
 },
 "paddingLeft": 0,
 "cursor": "hand",
 "maxWidth": 55
}],
 "shadow": false,
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "scripts": {
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "existsKey": function(key){  return key in window; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "unregisterKey": function(key){  delete window[key]; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getKey": function(key){  return window[key]; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "registerKey": function(key, value){  window[key] = value; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "buttonToggleFullscreen": [
  "this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A",
  "this.IconButton_018241B7_16B3_0353_41AF_66F445424C50"
 ],
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player468"
 },
 "mouseWheelEnabled": true,
 "gap": 10,
 "paddingLeft": 0,
 "layout": "absolute",
 "downloadEnabled": false,
 "defaultVRPointer": "laser"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
