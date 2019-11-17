// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/CostAnalysis/setting/nls/strings":{configText:"Ange konfigurationstext:",generalSettings:{tabTitle:"Allm\u00e4nna inst\u00e4llningar",measurementUnitLabel:"M\u00e4tenhet",currencyLabel:"M\u00e4tsymbol",roundCostLabel:"Avrundad kostnad",projectOutputSettings:"Inst\u00e4llningar f\u00f6r projektutdata",typeOfProjectAreaLabel:"Typ av projektomr\u00e5de",bufferDistanceLabel:"Buffertavst\u00e5nd",csvReportExportLabel:"Till\u00e5t att anv\u00e4ndare exporterar rapporter f\u00f6r projektet",
editReportSettingsBtnTooltip:"Redigera rapportinst\u00e4llningar",roundCostValues:{twoDecimalPoint:"Tv\u00e5 decimaler",nearestWholeNumber:"N\u00e4rmaste heltal",nearestTen:"N\u00e4rmaste tiotal",nearestHundred:"N\u00e4rmaste hundratal",nearestThousand:"N\u00e4rmaste tusental",nearestTenThousands:"N\u00e4rmaste tiotusental"},reportSettings:{reportSettingsPopupTitle:"Rapportinst\u00e4llningar",reportNameLabel:"Rapportnamn (valfritt) :",checkboxLabel:"Visa",layerTitle:"Titel",columnLabel:"Etikett",
duplicateMsg:"Dubblettetikett"},projectAreaType:{outline:"Kontur",buffer:"Buffert"},errorMessages:{currency:"Ogiltig valutaenhet",bufferDistance:"Ogiltigt buffertavst\u00e5nd",outOfRangebufferDistance:"V\u00e4rdet ska vara st\u00f6rre \u00e4n 0 och mindre \u00e4n eller lika med 100."}},projectSettings:{tabTitle:"Projektinst\u00e4llningar",costingGeometrySectionTitle:"Definiera geografi f\u00f6r kostnadsber\u00e4kning (valfritt)",costingGeometrySectionNote:"Obs! Genom att konfigurera det h\u00e4r lagret kan anv\u00e4ndaren st\u00e4lla in kostnadsekvationer f\u00f6r geoobjektmallar baserat p\u00e5 geografier.",
projectTableSectionTitle:"M\u00f6jlighet att spara/ladda projektinst\u00e4llningar (valfritt)",projectTableSectionNote:"Obs! Genom att konfigurera alla tabeller och lager kan anv\u00e4ndaren spara/ladda projektet f\u00f6r senare anv\u00e4ndning.",costingGeometryLayerLabel:"Geometrilager f\u00f6r kostnadsber\u00e4kning",fieldLabelGeography:"F\u00e4lt f\u00f6r att namnge geografi",projectAssetsTableLabel:"Projektresurstabell",projectMultiplierTableLabel:"Tabell f\u00f6r ytterligare kostnader f\u00f6r projektmultiplikator",
projectLayerLabel:"Projektlager",configureFieldsLabel:"Konfigurera f\u00e4lt",fieldDescriptionHeaderTitle:"F\u00e4ltbeskrivning",layerFieldsHeaderTitle:"Lagerf\u00e4lt",selectLabel:"V\u00e4lj",errorMessages:{duplicateLayerSelection:"${layerName} har redan valts",invalidConfiguration:"V\u00e4lj ${fieldsString}"},costingGeometryHelp:"\x3cp\x3ePolygonlager med f\u00f6ljande villkor visas: \x3cbr/\x3e \x3cli\x3e\tLagret m\u00e5ste ha \u00e2\u20ac\u0153fr\u00e5gekapacitet\u00e2\u20ac\u009d\x3c/li\x3e\x3cli\x3e\tLagret m\u00e5ste ha ett GlobalID-f\u00e4lt\x3c/li\x3e\x3c/p\x3e",
fieldToLabelGeographyHelp:"\x3cp\x3eStr\u00e4ngf\u00e4lt och numeriska f\u00e4lt i det valda \u00e2\u20ac\u0153geometrilagret f\u00f6r kostnadsber\u00e4kning\u00e2\u20ac\u009d visas i listmenyn \u00e2\u20ac\u0153F\u00e4lt f\u00f6r att namnge geografi\u00e2\u20ac\u009d.\x3c/p\x3e",projectAssetsTableHelp:"\x3cp\x3eTabell(er) med f\u00f6ljande villkor visas: \x3cbr/\x3e \x3cli\x3eTabellen m\u00e5ste vara redigerbar i form av \u00e2\u20ac\u0153Skapa\u00e2\u20ac\u009d, \u00e2\u20ac\u0153Ta bort\u00e2\u20ac\u009d och \u00e2\u20ac\u0153Uppdatera\u00e2\u20ac\u009d\x3c/li\x3e    \x3cli\x3eTabellen m\u00e5ste ha sex f\u00e4lt med exakt namn och datatyp:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tAssetGUID (f\u00e4lt av GUID-typ)\x3c/li\x3e\x3cli\x3e\tCostEquation (f\u00e4lt av str\u00e4ngtyp)\x3c/li\x3e\x3cli\x3e\tScenario (f\u00e4lt av str\u00e4ngtyp)\x3c/li\x3e\x3cli\x3e\tTemplateName (f\u00e4lt av str\u00e4ngtyp)\x3c/li\x3e\x3cli\x3e    GeographyGUID (f\u00e4lt av GUID-typ)\x3c/li\x3e\x3cli\x3e\tProjectGUID (f\u00e4lt av GUID-typ)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectMultiplierTableHelp:"\x3cp\x3eTabell(er) med f\u00f6ljande villkor visas: \x3cbr/\x3e \x3cli\x3eTabellen m\u00e5ste vara redigerbar i form av \u00e2\u20ac\u0153Skapa\u00e2\u20ac\u009d, \u00e2\u20ac\u0153Ta bort\u00e2\u20ac\u009d och \u00e2\u20ac\u0153Uppdatera\u00e2\u20ac\u009d\x3c/li\x3e    \x3cli\x3eTabellen m\u00e5ste ha fem f\u00e4lt med exakt namn och datatyp:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tDescription (f\u00e4lt av str\u00e4ngtyp)\x3c/li\x3e\x3cli\x3e\tType (f\u00e4lt av str\u00e4ngtyp)\x3c/li\x3e\x3cli\x3e\tValue (f\u00e4lt av float/double-typ)\x3c/li\x3e\x3cli\x3e\tCostindex (f\u00e4lt av heltalstyp)\x3c/li\x3e\x3cli\x3e   \tProjectGUID (f\u00e4lt av GUID-typ)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectLayerHelp:"\x3cp\x3ePolygonlager med f\u00f6ljande villkor visas: \x3cbr/\x3e \x3cli\x3eLagret m\u00e5ste vara redigerbart i form av \u00e2\u20ac\u0153Skapa\u00e2\u20ac\u009d, \u00e2\u20ac\u0153Ta bort\u00e2\u20ac\u009d och \u00e2\u20ac\u0153Uppdatera\u00e2\u20ac\u009d\x3c/li\x3e    \x3cli\x3eLagret m\u00e5ste ha fem f\u00e4lt med exakt namn och datatyp:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tProjectName (f\u00e4lt av str\u00e4ngtyp)\x3c/li\x3e\x3cli\x3e\tDescription (f\u00e4lt av str\u00e4ngtyp)\x3c/li\x3e\x3cli\x3eTotalassetcost (f\u00e4lt av float/double-typ)\x3c/li\x3e\x3cli\x3eGrossprojectcost (f\u00e4lt av float/double-typ)\x3c/li\x3e\x3cli\x3eGlobalID (f\u00e4lt av GlobalID-typ)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
pointLayerCentroidLabel:"Punktlagercentroid",selectRelatedPointLayerDefaultOption:"V\u00e4lj",pointLayerHintText:"\x3cp\x3ePunktlager med f\u00f6ljande villkor visas: \x3cbr/\x3e \x3cli\x3e\tLagret m\u00e5ste ha f\u00e4ltet Projectid (typ GUID)\x3c/li\x3e\x3cli\x3e\tLagret m\u00e5ste ha redigeringsm\u00f6jlighet, n\u00e4mligen Skapa, Ta bort och Uppdatera\x3c/li\x3e\x3c/p\x3e"},layerSettings:{tabTitle:"Lagerinst\u00e4llningar",layerNameHeaderTitle:"Lagernamn",layerNameHeaderTooltip:"Lista med lager i kartan",
EditableLayerHeaderTitle:"Redigerbar",EditableLayerHeaderTooltip:"Inkludera lager och dess mallar i widgeten f\u00f6r kostnadsber\u00e4kning",SelectableLayerHeaderTitle:"Valbar",SelectableLayerHeaderTooltip:"Geometri fr\u00e5n geoobjekt kan anv\u00e4ndas till att skapa en ny kostnadspost",fieldPickerHeaderTitle:"Projekt-ID (valfritt)",fieldPickerHeaderTooltip:"Valfritt f\u00e4lt (av typen str\u00e4ng) som Projekt-ID lagras i",selectLabel:"V\u00e4lj",noAssetLayersAvailable:"Inget resurslager hittades i den valda webbkartan",
disableEditableCheckboxTooltip:"Det h\u00e4r lagret har ingen redigeringskapacitet",missingCapabilitiesMsg:"Lagret saknar f\u00f6ljande funktioner:",missingGlobalIdMsg:"Lagret har inget GlobalId-f\u00e4lt",create:"Skapa",update:"Uppdatera",deleteColumnLabel:"Ta bort",attributeSettingHeaderTitle:"Attributinst\u00e4llningar",addFieldLabelTitle:"L\u00e4gg till attribut",layerAttributesHeaderTitle:"Lagerattribut",projectLayerAttributesHeaderTitle:"Projektlagerattribut",attributeSettingsPopupTitle:"Inst\u00e4llningar f\u00f6r Lagerattribut"},
costingInfo:{tabTitle:"Information om kostnadsber\u00e4kning",proposedMainsLabel:"F\u00f6reslagna huvudobjekt",addCostingTemplateLabel:"L\u00e4gg till mall f\u00f6r kostnadsber\u00e4kning",manageScenariosTitle:"Hantera scenarion",featureTemplateTitle:"Geoobjektmall",costEquationTitle:"Kostnadsekvation",geographyTitle:"Geografi",scenarioTitle:"Scenario",actionTitle:"\u00c5tg\u00e4rder",scenarioNameLabel:"Scenarionamn",addBtnLabel:"L\u00e4gg till",srNoLabel:"Nej.",deleteLabel:"Ta bort",duplicateScenarioName:"Dubblerat scenarionamn",
hintText:"\x3cdiv\x3eTips: Anv\u00e4nd f\u00f6ljande nyckelord\x3c/div\x3e\x3cul\x3e\x3cli\x3e\x3cb\x3e{TOTALCOUNT}\x3c/b\x3e: Anv\u00e4nder det totala antalet av samma typ av resurs i en geografi\x3c/li\x3e\x3cli\x3e\x3cb\x3e{MEASURE}\x3c/b\x3e: Anv\u00e4nder l\u00e4ngden f\u00f6r linjeresurs och yta f\u00f6r polygonresurs\x3c/li\x3e\x3cli\x3e\x3cb\x3e{TOTALMEASURE}\x3c/b\x3e: Anv\u00e4nder den totala l\u00e4ngden f\u00f6r linjeresurser och den totala ytan f\u00f6r polygonresurser av samma typ i en geografi\x3c/li\x3e\x3c/ul\x3eDu kan anv\u00e4nda funktioner som:\x3cul\x3e\x3cli\x3eMath.abs(-100)\x3c/li\x3e\x3cli\x3eMath.floor({TOTALMEASURE})\x3c/li\x3e\x3c/ul\x3eRedigera kostnadsekvationen efter projektets behov.",
noneValue:"Inga",requiredCostEquation:"Ogiltig kostnadsekvation f\u00f6r ${layerName} : ${templateName}",duplicateTemplateMessage:"Dubblerad mallpost finns f\u00f6r ${layerName} : ${templateName}",defaultEquationRequired:"Standardekvation kr\u00e4vs f\u00f6r ${layerName} : ${templateName}",validCostEquationMessage:"Ange en giltig kostnadsekvation",costEquationHelpText:"Redigera kostnadsekvationen efter projektets behov",scenarioHelpText:"V\u00e4lj scenario efter projektets behov",copyRowTitle:"Kopiera rad",
noTemplateAvailable:"L\u00e4gg till minst en mall f\u00f6r ${layerName}",manageScenarioLabel:"Hantera scenario",noLayerMessage:"Ange minst ett lager i ${tabName}",noEditableLayersAvailable:"Lager m\u00e5ste markeras som redigerbara p\u00e5 fliken lagerinst\u00e4llningar",updateProjectCostCheckboxLabel:"Uppdatera projektekvationer",updateProjectCostEquationHint:"Tips! Det h\u00e4r till\u00e5ter anv\u00e4ndaren att uppdatera kostnadsekvationer f\u00f6r tillg\u00e5ngar som redan har lagts till i befintliga projekt med de nya ekvationer som definieras nedan baserat p\u00e5 geoobjektmallen, geografin och scenariot. Om kombinationen inte hittas st\u00e4lls den in till standardkostnadsekvationen, dvs. geografi och scenario som Ingen. Om geoobjektmallen har tagits bort st\u00e4lls kostnaden in till 0."},
statisticsSettings:{tabTitle:"Ytterligare inst\u00e4llningar",addStatisticsLabel:"L\u00e4gg till statistik",fieldNameTitle:"F\u00e4lt",statisticsTitle:"Etikett",addNewStatisticsText:"L\u00e4gg till ny statistik",deleteStatisticsText:"Ta bort statistik",moveStatisticsUpText:"Flytta statistik upp\u00e5t",moveStatisticsDownText:"Flytta statistik ned\u00e5t",selectDeselectAllTitle:"Markera alla"},projectCostSettings:{addProjectCostLabel:"L\u00e4gg till ytterligare projektkostnad",additionalCostValueColumnHeader:"V\u00e4rde",
invalidProjectCostMessage:"Ogiltig post f\u00f6r projektkostnad",additionalCostLabelColumnHeader:"Etikett",additionalCostTypeColumnHeader:"Typ"},statisticsType:{countLabel:"Antal",averageLabel:"Genomsnitt",maxLabel:"Maximalt",minLabel:"Minimum",summationLabel:"Sammanfattning",areaLabel:"Omr\u00e5de",lengthLabel:"L\u00e4ngd"},_localized:{}}});