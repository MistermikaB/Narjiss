(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"children":["this.MainViewer","this.ThumbnailList_A3904728_B0DC_CEEE_41E5_F2384A791EBE","this.Image_A4D64E2B_B0C5_5EE1_41D3_C59863517466"],"scripts":{"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"enableVR":TDV.Tour.Script.enableVR,"shareSocial":TDV.Tour.Script.shareSocial,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"clone":TDV.Tour.Script.clone,"resumePlayers":TDV.Tour.Script.resumePlayers,"openLink":TDV.Tour.Script.openLink,"isPanorama":TDV.Tour.Script.isPanorama,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getPixels":TDV.Tour.Script.getPixels,"quizShowScore":TDV.Tour.Script.quizShowScore,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"mixObject":TDV.Tour.Script.mixObject,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"initQuiz":TDV.Tour.Script.initQuiz,"getMainViewer":TDV.Tour.Script.getMainViewer,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"startMeasurement":TDV.Tour.Script.startMeasurement,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"quizStart":TDV.Tour.Script.quizStart,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"setValue":TDV.Tour.Script.setValue,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"quizFinish":TDV.Tour.Script.quizFinish,"executeJS":TDV.Tour.Script.executeJS,"initAnalytics":TDV.Tour.Script.initAnalytics,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"init":TDV.Tour.Script.init,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"downloadFile":TDV.Tour.Script.downloadFile,"getOverlays":TDV.Tour.Script.getOverlays,"existsKey":TDV.Tour.Script.existsKey,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"textToSpeech":TDV.Tour.Script.textToSpeech,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"unregisterKey":TDV.Tour.Script.unregisterKey,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"historyGoForward":TDV.Tour.Script.historyGoForward,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"playAudioList":TDV.Tour.Script.playAudioList,"showWindow":TDV.Tour.Script.showWindow,"getComponentByName":TDV.Tour.Script.getComponentByName,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"registerKey":TDV.Tour.Script.registerKey,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getKey":TDV.Tour.Script.getKey,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"historyGoBack":TDV.Tour.Script.historyGoBack,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"cloneBindings":TDV.Tour.Script.cloneBindings,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setMapLocation":TDV.Tour.Script.setMapLocation,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"toggleVR":TDV.Tour.Script.toggleVR,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"showPopupImage":TDV.Tour.Script.showPopupImage,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"disableVR":TDV.Tour.Script.disableVR,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getMediaByName":TDV.Tour.Script.getMediaByName,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"translate":TDV.Tour.Script.translate,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"createTween":TDV.Tour.Script.createTween,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setLocale":TDV.Tour.Script.setLocale},"minHeight":0,"hash": "daf68ad118886b5f3e6d06c370702275f514e788ec0d2d9e4d6f6522bf340be8", "definitions": [{"data":{"label":"EXTERIOR"},"class":"PhotoAlbum","playList":"this.album_A276E60E_B0CB_CEA3_41E3_6FAEC36FE078_AlbumPlayList","label":trans('album_A276E60E_B0CB_CEA3_41E3_6FAEC36FE078.label'),"thumbnailUrl":"media/album_A276E60E_B0CB_CEA3_41E3_6FAEC36FE078_t.png","id":"album_A276E60E_B0CB_CEA3_41E3_6FAEC36FE078"},{"label":trans('panorama_A29AA9CA_B0C5_45A3_41CE_01EAAB5492F2.label'),"thumbnailUrl":"media/panorama_A29AA9CA_B0C5_45A3_41CE_01EAAB5492F2_t.jpg","overlays":["this.overlay_A234D8E6_B0C4_C363_41E0_90E1574BB914"],"class":"Panorama","id":"panorama_A29AA9CA_B0C5_45A3_41CE_01EAAB5492F2","hfovMax":130,"data":{"label":"Oasis bathroom"},"adjacentPanoramas":[{"data":{"overlayID":"overlay_A234D8E6_B0C4_C363_41E0_90E1574BB914"},"panorama":"this.panorama_BC16D6AD_B0BB_CFE1_41E4_F27B6CC582E9","yaw":98.8,"distance":61.84,"select":"this.overlay_A234D8E6_B0C4_C363_41E0_90E1574BB914.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","backwardYaw":56.69}],"hfov":360,"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_A29AA9CA_B0C5_45A3_41CE_01EAAB5492F2_t.jpg","cube":{"class":"ImageResource","levels":[{"tags":"ondemand","width":33792,"url":"media/panorama_A29AA9CA_B0C5_45A3_41CE_01EAAB5492F2_0/{face}/0/{row}_{column}.jpg","height":5632,"class":"TiledImageResourceLevel","colCount":66,"rowCount":11},{"tags":"ondemand","width":18432,"url":"media/panorama_A29AA9CA_B0C5_45A3_41CE_01EAAB5492F2_0/{face}/1/{row}_{column}.jpg","height":3072,"class":"TiledImageResourceLevel","colCount":36,"rowCount":6},{"tags":"ondemand","width":9216,"url":"media/panorama_A29AA9CA_B0C5_45A3_41CE_01EAAB5492F2_0/{face}/2/{row}_{column}.jpg","height":1536,"class":"TiledImageResourceLevel","colCount":18,"rowCount":3},{"tags":"ondemand","width":6144,"url":"media/panorama_A29AA9CA_B0C5_45A3_41CE_01EAAB5492F2_0/{face}/3/{row}_{column}.jpg","height":1024,"class":"TiledImageResourceLevel","colCount":12,"rowCount":2},{"tags":["ondemand","preload"],"width":3072,"url":"media/panorama_A29AA9CA_B0C5_45A3_41CE_01EAAB5492F2_0/{face}/4/{row}_{column}.jpg","height":512,"class":"TiledImageResourceLevel","colCount":6,"rowCount":1}]}}],"vfov":180},{"items":[{"class":"PanoramaPlayListItem","camera":"this.panorama_BC16D6AD_B0BB_CFE1_41E4_F27B6CC582E9_camera","media":"this.panorama_BC16D6AD_B0BB_CFE1_41E4_F27B6CC582E9","player":"this.MainViewerPanoramaPlayer"},{"class":"PanoramaPlayListItem","camera":"this.panorama_A29AA9CA_B0C5_45A3_41CE_01EAAB5492F2_camera","media":"this.panorama_A29AA9CA_B0C5_45A3_41CE_01EAAB5492F2","player":"this.MainViewerPanoramaPlayer"},{"class":"PhotoAlbumPlayListItem","media":"this.album_A276E60E_B0CB_CEA3_41E3_6FAEC36FE078","player":"this.MainViewerPhotoAlbumPlayer"}],"class":"PlayList","id":"ThumbnailList_A3904728_B0DC_CEEE_41E5_F2384A791EBE_playlist"},{"enterPointingToHorizon":true,"class":"PanoramaCamera","initialSequence":"this.sequence_A14CCFA4_B0C5_7DE7_41BD_12E2DAD2EBFA","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"id":"panorama_A29AA9CA_B0C5_45A3_41CE_01EAAB5492F2_camera"},{"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarHeadShadowOpacity":0.7,"minHeight":50,"vrPointerColor":"#FFFFFF","minWidth":100,"toolTipPaddingLeft":6,"progressBackgroundColorRatios":[0],"data":{"name":"Main Viewer"},"progressBarBorderSize":0,"playbackBarProgressBackgroundColorRatios":[0],"toolTipFontSize":"1.11vmin","vrThumbstickRotationStep":20,"toolTipPaddingTop":4,"toolTipPaddingBottom":4,"subtitlesTextShadowColor":"#000000","playbackBarBorderColor":"#FFFFFF","playbackBarBorderRadius":0,"playbackBarHeadShadowBlurRadius":3,"progressRight":"33%","toolTipFontFamily":"Arial","playbackBarProgressBorderColor":"#000000","playbackBarHeadBorderRadius":0,"playbackBarHeadHeight":15,"subtitlesGap":0,"progressOpacity":0.7,"playbackBarLeft":0,"playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderColor":"#000000","playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesBackgroundColor":"#000000","subtitlesTextShadowVerticalLength":1,"toolTipFontColor":"#606060","toolTipBorderColor":"#767676","playbackBarBorderSize":0,"subtitlesFontSize":"3vmin","playbackBarHeadBorderSize":0,"progressBarBackgroundColorDirection":"horizontal","progressBarBorderColor":"#000000","playbackBarHeadShadow":true,"subtitlesTextShadowOpacity":1,"subtitlesBackgroundOpacity":0.2,"progressBarBackgroundColorRatios":[0],"subtitlesBorderColor":"#FFFFFF","playbackBarBackgroundOpacity":1,"toolTipPaddingRight":6,"id":"MainViewer","surfaceReticleSelectionColor":"#FFFFFF","progressBorderColor":"#000000","playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":5,"progressBarBackgroundColor":["#3399FF"],"toolTipTextShadowColor":"#000000","firstTransitionDuration":0,"toolTipShadowColor":"#333138","subtitlesFontColor":"#FFFFFF","progressBorderRadius":2,"progressBackgroundColor":["#000000"],"toolTipBackgroundColor":"#F6F6F6","vrPointerSelectionColor":"#FF6600","playbackBarBackgroundColor":["#FFFFFF"],"progressBottom":10,"subtitlesTextShadowHorizontalLength":1,"propagateClick":false,"progressLeft":"33%","class":"ViewerArea","playbackBarHeight":10,"subtitlesBottom":50,"playbackBarHeadWidth":6,"playbackBarProgressBorderSize":0,"progressHeight":2,"subtitlesFontFamily":"Arial","progressBarBorderRadius":2,"vrPointerSelectionTime":2000,"progressBorderSize":0,"height":"100%","subtitlesTop":0,"playbackBarBackgroundColorDirection":"vertical","playbackBarRight":0,"playbackBarProgressBorderRadius":0,"width":"100%","surfaceReticleColor":"#FFFFFF"},{"data":{"label":"EXT2"},"width":3840,"height":2160,"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/album_A276E60E_B0CB_CEA3_41E3_6FAEC36FE078_0.jpg"}]},"label":trans('album_A276E60E_B0CB_CEA3_41E3_6FAEC36FE078_0.label'),"thumbnailUrl":"media/album_A276E60E_B0CB_CEA3_41E3_6FAEC36FE078_0_t.jpg","class":"Photo","duration":2000,"id":"album_A276E60E_B0CB_CEA3_41E3_6FAEC36FE078_0"},{"click":"this.openLink(this.translate('LinkBehaviour_A5C8BBA4_B0FB_45E7_41E2_C1A1C479EDF4.source'), '_blank')","minHeight":1,"minWidth":1,"id":"Image_A4D64E2B_B0C5_5EE1_41D3_C59863517466","left":"0.03%","backgroundOpacity":0,"data":{"name":"Image12718"},"url":trans('Image_A4D64E2B_B0C5_5EE1_41D3_C59863517466.url'),"propagateClick":false,"top":"22.13%","verticalAlign":"middle","class":"Image","height":"17.656%","width":"10.198%","scaleMode":"fit_inside","horizontalAlign":"center"},{"data":{"label":"EXT3"},"width":3840,"height":2160,"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/album_A276E60E_B0CB_CEA3_41E3_6FAEC36FE078_1.jpg"}]},"label":trans('album_A276E60E_B0CB_CEA3_41E3_6FAEC36FE078_1.label'),"thumbnailUrl":"media/album_A276E60E_B0CB_CEA3_41E3_6FAEC36FE078_1_t.jpg","class":"Photo","duration":2000,"id":"album_A276E60E_B0CB_CEA3_41E3_6FAEC36FE078_1"},{"itemThumbnailBorderRadius":50,"itemThumbnailShadowColor":"#000000","itemBackgroundOpacity":0,"minHeight":20,"minWidth":20,"toolTipPaddingLeft":6,"left":"0%","itemLabelFontColor":"#FFFFFF","toolTipPaddingTop":4,"data":{"name":"ThumbnailList35762"},"itemLabelFontSize":14,"itemBorderRadius":0,"toolTipPaddingBottom":4,"backgroundColorRatios":[0],"itemThumbnailShadowOpacity":0.54,"selectedItemLabelFontWeight":"bold","itemPaddingTop":3,"toolTipFontFamily":"Arial","scrollBarColor":"#FFFFFF","borderRadius":5,"itemLabelTextDecoration":"none","itemLabelFontWeight":"normal","itemThumbnailShadow":true,"toolTipBorderColor":"#767676","toolTipFontColor":"#606060","scrollBarMargin":2,"itemThumbnailShadowBlurRadius":8,"itemPaddingBottom":3,"itemBackgroundColorDirection":"vertical","itemLabelFontStyle":"normal","rollOverItemBackgroundOpacity":0,"selectedItemLabelFontColor":"#FFCC00","itemPaddingLeft":3,"paddingTop":10,"paddingBottom":10,"toolTipPaddingRight":6,"itemThumbnailOpacity":1,"itemPaddingRight":3,"backgroundOpacity":0.24,"id":"ThumbnailList_A3904728_B0DC_CEEE_41E5_F2384A791EBE","backgroundColor":["#000000"],"tabIndex":0,"itemThumbnailScaleMode":"fit_outside","toolTipTextShadowColor":"#000000","toolTipShadowColor":"#333333","itemLabelGap":9,"paddingLeft":20,"toolTipBackgroundColor":"#F6F6F6","playList":"this.ThumbnailList_A3904728_B0DC_CEEE_41E5_F2384A791EBE_playlist","paddingRight":20,"itemBackgroundColorRatios":[],"propagateClick":false,"rollOverItemLabelFontWeight":"normal","bottom":"2.37%","itemThumbnailHeight":75,"class":"ThumbnailList","width":161.4,"itemBackgroundColor":[],"itemLabelFontFamily":"Arial","itemThumbnailWidth":75,"height":"55.431%","itemThumbnailShadowSpread":1,"layout":"vertical","gap":10},{"touchControlMode":"drag_rotation","arrowKeysAction":"translate","viewerArea":"this.MainViewer","displayPlaybackBar":true,"mouseControlMode":"drag_rotation","class":"PanoramaPlayer","aaEnabled":true,"id":"MainViewerPanoramaPlayer"},{"items":[{"camera":"this.panorama_BC16D6AD_B0BB_CFE1_41E4_F27B6CC582E9_camera","media":"this.panorama_BC16D6AD_B0BB_CFE1_41E4_F27B6CC582E9","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"camera":"this.panorama_A29AA9CA_B0C5_45A3_41CE_01EAAB5492F2_camera","media":"this.panorama_A29AA9CA_B0C5_45A3_41CE_01EAAB5492F2","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"media":"this.album_A276E60E_B0CB_CEA3_41E3_6FAEC36FE078","end":"this.trigger('tourEnded')","class":"PhotoAlbumPlayListItem","player":"this.MainViewerPhotoAlbumPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 0)"}],"class":"PlayList","id":"mainPlayList"},{"label":trans('panorama_BC16D6AD_B0BB_CFE1_41E4_F27B6CC582E9.label'),"thumbnailUrl":"media/panorama_BC16D6AD_B0BB_CFE1_41E4_F27B6CC582E9_t.jpg","overlays":["this.overlay_A1F6878A_B0BB_4DA3_41DE_1D7E28CD6E1A","this.overlay_A3FE65D3_B0CD_4DA1_41C4_24B9E95F36D0"],"class":"Panorama","id":"panorama_BC16D6AD_B0BB_CFE1_41E4_F27B6CC582E9","hfovMax":130,"data":{"label":"Oasis room"},"adjacentPanoramas":[{"data":{"overlayID":"overlay_A1F6878A_B0BB_4DA3_41DE_1D7E28CD6E1A"},"panorama":"this.panorama_A29AA9CA_B0C5_45A3_41CE_01EAAB5492F2","yaw":56.69,"distance":100,"select":"this.overlay_A1F6878A_B0BB_4DA3_41DE_1D7E28CD6E1A.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","backwardYaw":98.8}],"hfov":360,"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_BC16D6AD_B0BB_CFE1_41E4_F27B6CC582E9_t.jpg","cube":{"class":"ImageResource","levels":[{"tags":"ondemand","width":33792,"url":"media/panorama_BC16D6AD_B0BB_CFE1_41E4_F27B6CC582E9_0/{face}/0/{row}_{column}.jpg","height":5632,"class":"TiledImageResourceLevel","colCount":66,"rowCount":11},{"tags":"ondemand","width":18432,"url":"media/panorama_BC16D6AD_B0BB_CFE1_41E4_F27B6CC582E9_0/{face}/1/{row}_{column}.jpg","height":3072,"class":"TiledImageResourceLevel","colCount":36,"rowCount":6},{"tags":"ondemand","width":9216,"url":"media/panorama_BC16D6AD_B0BB_CFE1_41E4_F27B6CC582E9_0/{face}/2/{row}_{column}.jpg","height":1536,"class":"TiledImageResourceLevel","colCount":18,"rowCount":3},{"tags":"ondemand","width":6144,"url":"media/panorama_BC16D6AD_B0BB_CFE1_41E4_F27B6CC582E9_0/{face}/3/{row}_{column}.jpg","height":1024,"class":"TiledImageResourceLevel","colCount":12,"rowCount":2},{"tags":["ondemand","preload"],"width":3072,"url":"media/panorama_BC16D6AD_B0BB_CFE1_41E4_F27B6CC582E9_0/{face}/4/{row}_{column}.jpg","height":512,"class":"TiledImageResourceLevel","colCount":6,"rowCount":1}]}}],"vfov":180},{"class":"PhotoAlbumPlayer","viewerArea":"this.MainViewer","id":"MainViewerPhotoAlbumPlayer"},{"enterPointingToHorizon":true,"class":"PanoramaCamera","initialSequence":{"class":"PanoramaCameraSequence","movements":[{"pitchSpeed":17.05,"yawSpeed":33.25,"class":"TargetPanoramaCameraMovement","targetYaw":47.14,"targetPitch":20.98,"easing":"cubic_in_out"}]},"initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"id":"panorama_BC16D6AD_B0BB_CFE1_41E4_F27B6CC582E9_camera"},{"items":[{"class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_outside"},"media":"this.album_A276E60E_B0CB_CEA3_41E3_6FAEC36FE078_0"},{"class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_outside"},"media":"this.album_A276E60E_B0CB_CEA3_41E3_6FAEC36FE078_1"}],"class":"PhotoPlayList","id":"album_A276E60E_B0CB_CEA3_41E3_6FAEC36FE078_AlbumPlayList"},{"data":{"label":"Arrow 01","hasPanoramaAction":true},"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"items":[{"pitch":-1.56,"class":"HotspotPanoramaOverlayImage","yaw":98.8,"distance":100,"image":"this.AnimatedImageResource_A6E731D5_B0C7_45A1_41E0_BE77FEA453B0","hfov":11.42,"vfov":10.28,"scaleMode":"fit_inside","data":{"label":"Arrow 01"}}],"maps":[],"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_A3F41901_B0C4_C29E_41E3_068F36A4A5C2"],"id":"overlay_A234D8E6_B0C4_C363_41E0_90E1574BB914"},{"movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96}],"class":"PanoramaCameraSequence","id":"sequence_A14CCFA4_B0C5_7DE7_41BD_12E2DAD2EBFA"},{"data":{"label":"Arrow 01"},"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"items":[{"pitch":3.74,"class":"HotspotPanoramaOverlayImage","yaw":56.69,"distance":100,"image":"this.AnimatedImageResource_A6E751D5_B0C7_45A1_41E5_A4658C89E424","hfov":15,"vfov":13.5,"scaleMode":"fit_inside","data":{"label":"Arrow 01"}}],"maps":[],"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_A10027CF_B0BB_4DA2_41E1_425072A5483D"],"id":"overlay_A1F6878A_B0BB_4DA3_41DE_1D7E28CD6E1A"},{"data":{"label":"Image"},"class":"HotspotPanoramaOverlay","items":[{"pitch":-27.25,"class":"HotspotPanoramaOverlayImage","yaw":-89.14,"distance":50,"image":"this.res_A4A064A9_B0CD_43E1_41DA_C70E6E39A03D","hfov":15,"vfov":12.68,"scaleMode":"fit_inside","data":{"label":"Image"}}],"maps":[],"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_A2285646_B0CD_4EA3_41DE_D6F04CFC1EC9"],"id":"overlay_A3FE65D3_B0CD_4DA1_41C4_24B9E95F36D0"},{"finalFrame":"first","frameCount":9,"rowCount":3,"levels":[{"width":300,"url":"media/res_A2963878_B0C5_436F_41E1_AA6D13B316E9_0.png","height":270,"class":"ImageResourceLevel"}],"class":"AnimatedImageResource","frameDuration":62,"colCount":3,"id":"AnimatedImageResource_A6E731D5_B0C7_45A1_41E0_BE77FEA453B0"},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_A3F41901_B0C4_C29E_41E3_068F36A4A5C2","displayTooltipInTouchScreens":true},{"finalFrame":"first","frameCount":9,"rowCount":3,"levels":[{"width":300,"url":"media/res_A2963878_B0C5_436F_41E1_AA6D13B316E9_0.png","height":270,"class":"ImageResourceLevel"}],"class":"AnimatedImageResource","frameDuration":62,"colCount":3,"id":"AnimatedImageResource_A6E751D5_B0C7_45A1_41E5_A4658C89E424"},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_A10027CF_B0BB_4DA2_41E1_425072A5483D","displayTooltipInTouchScreens":true},{"class":"ImageResource","id":"res_A4A064A9_B0CD_43E1_41DA_C70E6E39A03D","levels":[{"width":123,"url":"media/res_A4A064A9_B0CD_43E1_41DA_C70E6E39A03D_0.png","height":104,"class":"ImageResourceLevel"}]},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)","mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_A2285646_B0CD_4EA3_41DE_D6F04CFC1EC9","displayTooltipInTouchScreens":true}],"minWidth":0,"id":"rootPlayer","start":"this.init(); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_A3904728_B0DC_CEEE_41E5_F2384A791EBE_playlist]); this.syncPlaylists([this.ThumbnailList_A3904728_B0DC_CEEE_41E5_F2384A791EBE_playlist,this.mainPlayList]); this.syncPlaylists([this.ThumbnailList_A3904728_B0DC_CEEE_41E5_F2384A791EBE_playlist,this.mainPlayList]); this.syncPlaylists([this.ThumbnailList_A3904728_B0DC_CEEE_41E5_F2384A791EBE_playlist,this.mainPlayList])","data":{"locales":{"fr":"locale/fr.txt"},"defaultLocale":"fr","displayTooltipInTouchScreens":true,"textToSpeechConfig":{"pitch":1,"speechOnTooltip":false,"rate":1,"speechOnInfoWindow":false,"volume":1,"speechOnQuizQuestion":false,"stopBackgroundAudio":false},"name":"Player479","history":{}},"backgroundColor":["#FFFFFF"],"backgroundColorRatios":[0],"defaultMenu":["fullscreen","mute","rotation"],"propagateClick":false,"scrollBarColor":"#000000","class":"Player","scrollBarMargin":2,"height":"100%","gap":10,"width":"100%","layout":"absolute"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2024.0.19.js.map
})();
//Generated with v2024.0.19, Tue Dec 10 2024