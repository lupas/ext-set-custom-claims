/*
 * This template contains a HTTP onCall function that sets custom claims to an authorization user.
 * If the param SECURITY_CLAIM_PATH is set (path to a claim that has to be true, such as 'isAdmin'), we check if that claim
 * is true, if not this function will fail and return 401.
 */

import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import { get } from 'lodash'

admin.initializeApp()

export const setCustomClaims = functions.handler.https.onCall(async ({uid, customClaims}, context) => {

  const callerAuth = context.auth
  const SECURITY_CLAIM_PATH = process.env.SECURITY_CLAIM_PATH

  // If securityCheck is set, check if it is true, otherwise reject the call.
  if (SECURITY_CLAIM_PATH && (!callerAuth || !get(callerAuth.token, SECURITY_CLAIM_PATH))) {
    throw new functions.https.HttpsError('unauthenticated', "You are not allowed do call this function.")
  }

  try {
    // Sets certain custom claims for an authorization user
    await admin.auth().setCustomUserClaims(uid, customClaims)
  } catch (e) {
    console.error(e)
    throw new functions.https.HttpsError('internal', e.message, e)
  }

  return { success: true }
})