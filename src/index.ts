export { GoogleMapsPlatformClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { TokenProvider } from "./core/auth/credentials.js";

export { ServerEnvironment } from "./servers.js";

export { GeolocationApi } from "./resources/geolocation-api.js";
export { DirectionsApi } from "./resources/directions-api.js";
export { ElevationApi } from "./resources/elevation-api.js";
export { GeocodingApi } from "./resources/geocoding-api.js";
export { TimeZoneApi } from "./resources/time-zone-api.js";
export { RoadsApi } from "./resources/roads-api.js";
export { DistanceMatrixApi } from "./resources/distance-matrix-api.js";
export { PlacesApi } from "./resources/places-api.js";
export { StreetViewApi } from "./resources/street-view-api.js";

export { addressComponentSchema, type AddressComponent } from "./models/address-component.js";
export { AreaType, areaTypeSchema } from "./models/area-type.js";
export { arrivalTimeSchema, type ArrivalTime } from "./models/arrival-time.js";
export { boundsSchema, type Bounds } from "./models/bounds.js";
export { bounds1Schema, type Bounds1 } from "./models/bounds1.js";
export { BusinessStatus, businessStatusSchema } from "./models/business-status.js";
export { cellTowerSchema, type CellTower } from "./models/cell-tower.js";
export { currentOpeningHoursSchema, type CurrentOpeningHours } from "./models/current-opening-hours.js";
export { departureTimeSchema, type DepartureTime } from "./models/departure-time.js";
export {
  directionsGeocodedWaypointSchema,
  type DirectionsGeocodedWaypoint,
} from "./models/directions-geocoded-waypoint.js";
export { directionsLegSchema, type DirectionsLeg } from "./models/directions-leg.js";
export { directionsPolylineSchema, type DirectionsPolyline } from "./models/directions-polyline.js";
export { directionsResponseSchema, type DirectionsResponse } from "./models/directions-response.js";
export { directionsRouteSchema, type DirectionsRoute } from "./models/directions-route.js";
export { DirectionsStatus, directionsStatusSchema } from "./models/directions-status.js";
export { directionsStepSchema, type DirectionsStep } from "./models/directions-step.js";
export {
  directionsTrafficSpeedEntrySchema,
  type DirectionsTrafficSpeedEntry,
} from "./models/directions-traffic-speed-entry.js";
export {
  directionsTransitAgencySchema,
  type DirectionsTransitAgency,
} from "./models/directions-transit-agency.js";
export {
  directionsTransitDetailsSchema,
  type DirectionsTransitDetails,
} from "./models/directions-transit-details.js";
export { directionsTransitLineSchema, type DirectionsTransitLine } from "./models/directions-transit-line.js";
export { directionsTransitStopSchema, type DirectionsTransitStop } from "./models/directions-transit-stop.js";
export {
  directionsTransitVehicleSchema,
  type DirectionsTransitVehicle,
} from "./models/directions-transit-vehicle.js";
export { directionsViaWaypointSchema, type DirectionsViaWaypoint } from "./models/directions-via-waypoint.js";
export { distanceSchema, type Distance } from "./models/distance.js";
export { distanceMatrixElementSchema, type DistanceMatrixElement } from "./models/distance-matrix-element.js";
export {
  DistanceMatrixElementStatus,
  distanceMatrixElementStatusSchema,
} from "./models/distance-matrix-element-status.js";
export {
  distanceMatrixResponseSchema,
  type DistanceMatrixResponse,
} from "./models/distance-matrix-response.js";
export { distanceMatrixRowSchema, type DistanceMatrixRow } from "./models/distance-matrix-row.js";
export { DistanceMatrixStatus, distanceMatrixStatusSchema } from "./models/distance-matrix-status.js";
export { durationSchema, type Duration } from "./models/duration.js";
export { durationInTrafficSchema, type DurationInTraffic } from "./models/duration-in-traffic.js";
export { editorialSummarySchema, type EditorialSummary } from "./models/editorial-summary.js";
export { elevationResponseSchema, type ElevationResponse } from "./models/elevation-response.js";
export { elevationResultSchema, type ElevationResult } from "./models/elevation-result.js";
export { ElevationStatus, elevationStatusSchema } from "./models/elevation-status.js";
export { endLocationSchema, type EndLocation } from "./models/end-location.js";
export { errorDetailSchema, type ErrorDetail } from "./models/error-detail.js";
export { errorObjectSchema, type ErrorObject } from "./models/error-object.js";
export { errorResponseSchema, type ErrorResponse } from "./models/error-response.js";
export { fareSchema, type Fare } from "./models/fare.js";
export { fare1Schema, type Fare1 } from "./models/fare1.js";
export { fieldViolationSchema, type FieldViolation } from "./models/field-violation.js";
export { GeocoderStatus, geocoderStatusSchema } from "./models/geocoder-status.js";
export { geocodingGeometrySchema, type GeocodingGeometry } from "./models/geocoding-geometry.js";
export { geocodingResponseSchema, type GeocodingResponse } from "./models/geocoding-response.js";
export { geocodingResultSchema, type GeocodingResult } from "./models/geocoding-result.js";
export { GeocodingStatus, geocodingStatusSchema } from "./models/geocoding-status.js";
export {
  geolocationV1Geolocate400ErrorSchema,
  type GeolocationV1Geolocate400Error,
} from "./models/geolocation-v1-geolocate400-error.js";
export {
  geolocationV1Geolocate400Error1Schema,
  type GeolocationV1Geolocate400Error1,
} from "./models/geolocation-v1-geolocate400-error1.js";
export {
  geolocationV1Geolocate404ErrorSchema,
  type GeolocationV1Geolocate404Error,
} from "./models/geolocation-v1-geolocate404-error.js";
export {
  geolocationV1Geolocate404Error1Schema,
  type GeolocationV1Geolocate404Error1,
} from "./models/geolocation-v1-geolocate404-error1.js";
export {
  geolocationV1GeolocateRequestSchema,
  type GeolocationV1GeolocateRequest,
} from "./models/geolocation-v1-geolocate-request.js";
export {
  geolocationV1GeolocateResponseSchema,
  type GeolocationV1GeolocateResponse,
} from "./models/geolocation-v1-geolocate-response.js";
export { geolocationRequestSchema, type GeolocationRequest } from "./models/geolocation-request.js";
export { geolocationResponseSchema, type GeolocationResponse } from "./models/geolocation-response.js";
export { geometrySchema, type Geometry } from "./models/geometry.js";
export { geometry1Schema, type Geometry1 } from "./models/geometry1.js";
export { geometry2Schema, type Geometry2 } from "./models/geometry2.js";
export { latLngLiteralSchema, type LatLngLiteral } from "./models/lat-lng-literal.js";
export {
  latitudeLongitudeLiteralSchema,
  type LatitudeLongitudeLiteral,
} from "./models/latitude-longitude-literal.js";
export { locationSchema, type Location } from "./models/location.js";
export { location6Schema, type Location6 } from "./models/location6.js";
export { Maneuver, maneuverSchema } from "./models/maneuver.js";
export {
  mapsApiElevationJsonResponseSchema,
  type MapsApiElevationJsonResponse,
} from "./models/maps-api-elevation-json-response.js";
export { nearestRoadsErrorSchema, type NearestRoadsError } from "./models/nearest-roads-error.js";
export {
  nearestRoadsErrorResponseSchema,
  type NearestRoadsErrorResponse,
} from "./models/nearest-roads-error-response.js";
export { nearestRoadsResponseSchema, type NearestRoadsResponse } from "./models/nearest-roads-response.js";
export { northeastSchema, type Northeast } from "./models/northeast.js";
export { openingHoursSchema, type OpeningHours } from "./models/opening-hours.js";
export { overviewPolylineSchema, type OverviewPolyline } from "./models/overview-polyline.js";
export { placeSchema, type Place } from "./models/place.js";
export {
  placeAutocompleteMatchedSubstringSchema,
  type PlaceAutocompleteMatchedSubstring,
} from "./models/place-autocomplete-matched-substring.js";
export {
  placeAutocompletePredictionSchema,
  type PlaceAutocompletePrediction,
} from "./models/place-autocomplete-prediction.js";
export {
  placeAutocompleteStructuredFormatSchema,
  type PlaceAutocompleteStructuredFormat,
} from "./models/place-autocomplete-structured-format.js";
export { placeAutocompleteTermSchema, type PlaceAutocompleteTerm } from "./models/place-autocomplete-term.js";
export { placeEditorialSummarySchema, type PlaceEditorialSummary } from "./models/place-editorial-summary.js";
export { placeOpeningHoursSchema, type PlaceOpeningHours } from "./models/place-opening-hours.js";
export {
  placeOpeningHoursPeriodSchema,
  type PlaceOpeningHoursPeriod,
} from "./models/place-opening-hours-period.js";
export {
  placeOpeningHoursPeriodDetailSchema,
  type PlaceOpeningHoursPeriodDetail,
} from "./models/place-opening-hours-period-detail.js";
export { placePhotoSchema, type PlacePhoto } from "./models/place-photo.js";
export { placeReviewSchema, type PlaceReview } from "./models/place-review.js";
export { placeSpecialDaySchema, type PlaceSpecialDay } from "./models/place-special-day.js";
export {
  placesAutocompleteResponseSchema,
  type PlacesAutocompleteResponse,
} from "./models/places-autocomplete-response.js";
export {
  PlacesAutocompleteStatus,
  placesAutocompleteStatusSchema,
} from "./models/places-autocomplete-status.js";
export { placesDetailsResponseSchema, type PlacesDetailsResponse } from "./models/places-details-response.js";
export { PlacesDetailsStatus, placesDetailsStatusSchema } from "./models/places-details-status.js";
export {
  placesFindPlaceFromTextResponseSchema,
  type PlacesFindPlaceFromTextResponse,
} from "./models/places-find-place-from-text-response.js";
export {
  placesNearbySearchResponseSchema,
  type PlacesNearbySearchResponse,
} from "./models/places-nearby-search-response.js";
export {
  placesQueryAutocompleteResponseSchema,
  type PlacesQueryAutocompleteResponse,
} from "./models/places-query-autocomplete-response.js";
export { PlacesSearchStatus, placesSearchStatusSchema } from "./models/places-search-status.js";
export {
  placesTextSearchResponseSchema,
  type PlacesTextSearchResponse,
} from "./models/places-text-search-response.js";
export { plusCodeSchema, type PlusCode } from "./models/plus-code.js";
export { plusCode1Schema, type PlusCode1 } from "./models/plus-code1.js";
export { polylineSchema, type Polyline } from "./models/polyline.js";
export { resultSchema, type Result } from "./models/result.js";
export { result2Schema, type Result2 } from "./models/result2.js";
export { snapToRoadsResponseSchema, type SnapToRoadsResponse } from "./models/snap-to-roads-response.js";
export { snappedPointSchema, type SnappedPoint } from "./models/snapped-point.js";
export { southwestSchema, type Southwest } from "./models/southwest.js";
export { startLocationSchema, type StartLocation } from "./models/start-location.js";
export { streetViewResponseSchema, type StreetViewResponse } from "./models/street-view-response.js";
export { StreetViewStatus, streetViewStatusSchema } from "./models/street-view-status.js";
export { textValueObjectSchema, type TextValueObject } from "./models/text-value-object.js";
export { timeZoneResponseSchema, type TimeZoneResponse } from "./models/time-zone-response.js";
export { TimeZoneStatus, timeZoneStatusSchema } from "./models/time-zone-status.js";
export {
  timeZoneTextValueObjectSchema,
  type TimeZoneTextValueObject,
} from "./models/time-zone-text-value-object.js";
export { transitDetailsSchema, type TransitDetails } from "./models/transit-details.js";
export { TravelMode, travelModeSchema } from "./models/travel-mode.js";
export {
  v1NearestRoads400ErrorSchema,
  type V1NearestRoads400Error,
} from "./models/v1-nearest-roads400-error.js";
export { VehicleType, vehicleTypeSchema } from "./models/vehicle-type.js";
export { viewportSchema, type Viewport } from "./models/viewport.js";
export { wiFiAccessPointSchema, type WiFiAccessPoint } from "./models/wi-fi-access-point.js";
export { Inputtype, inputtypeSchema } from "./models/inputtype.js";
export { Inputtype1, inputtype1Schema } from "./models/inputtype1.js";
export { Language, languageSchema } from "./models/language.js";
export { Language1, language1Schema } from "./models/language1.js";
export { LocationType, locationTypeSchema } from "./models/location-type.js";
export { Maxprice, maxpriceSchema } from "./models/maxprice.js";
export { Maxprice1, maxprice1Schema } from "./models/maxprice1.js";
export { Minprice, minpriceSchema } from "./models/minprice.js";
export { Minprice1, minprice1Schema } from "./models/minprice1.js";
export { Mode, modeSchema } from "./models/mode.js";
export { Mode1, mode1Schema } from "./models/mode1.js";
export { Rankby, rankbySchema } from "./models/rankby.js";
export { Rankby1, rankby1Schema } from "./models/rankby1.js";
export { Region, regionSchema } from "./models/region.js";
export { Region1, region1Schema } from "./models/region1.js";
export { ResultType, resultTypeSchema } from "./models/result-type.js";
export { Source, sourceSchema } from "./models/source.js";
export { Source1, source1Schema } from "./models/source1.js";
export { TrafficModel, trafficModelSchema } from "./models/traffic-model.js";
export { TrafficModel1, trafficModel1Schema } from "./models/traffic-model1.js";
export {
  TransitRoutingPreference,
  transitRoutingPreferenceSchema,
} from "./models/transit-routing-preference.js";
export {
  TransitRoutingPreference1,
  transitRoutingPreference1Schema,
} from "./models/transit-routing-preference1.js";
export { Units, unitsSchema } from "./models/units.js";
export { Units1, units1Schema } from "./models/units1.js";
export { Units2, units2Schema } from "./models/units2.js";

export {
  CoreError as GoogleMapsPlatformError,
  ResponseError,
  DecodeError,
  EncodeError,
  ConnectionError,
  TimeoutError,
  AuthError,
  ConfigurationError,
} from "./core/errors.js";
export { ApiError } from "./core/api-error.js";
export { SchemaError } from "./core/validation/schema-error.js";
export {
  defaultLoggingOptions,
  type LoggingOptions,
  type RequestLoggingOptions,
  type Logger,
  type LogDetails,
  type HttpRequestDetails,
  type RequestHeadersDetails,
  type RequestBodyDetails,
  type HttpResponseDetails,
  type ResponseHeadersDetails,
  type HttpRetryingDetails,
  type HttpFailedDetails,
  type LogLevel,
} from "./core/logging.js";
export type { ApiPromise, ApiResult } from "./core/api-promise.js";
export type { HttpMethod, RequestOptions } from "./core/api-request.js";
export type { RetryOptions, RequestRetryOptions, RetryAttempt, RetryReason } from "./core/retry.js";
export type { BinaryContent, BinaryData, BinaryErrorContent, FileData, FileInput } from "./core/binary.js";
export type { ErrorKind } from "./core/errors.js";
export type { ErrorPayload, Declared, Undeclared } from "./core/api-error.js";
export type { Schema, EnumSchema, Encoded } from "./core/validation/schema.js";
