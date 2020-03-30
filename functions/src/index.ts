/*
 * This template contains a HTTP onCall function that sets a custom claim to an Authorization user.
 * If a Security Claim is set (path to a claim that has to be true), we check if that claim
 * is true, if not this function will fail.
 */

import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

export const setCustomClaims = functions.handler.https.onCall(async ({uid, customClaims}, context) => {

  const callerAuth = context.auth
  const SECURITY_CLAIM_PATH = process.env.SECURITY_CLAIM_PATH

  // If securityCheck is set, check if it is true, othrwise reeject the call.
  if (SECURITY_CLAIM_PATH && (!callerAuth || !callerAuth.token[SECURITY_CLAIM_PATH])) {
    throw new functions.https.HttpsError('unauthenticated', "You are not allowed do call this action.")
  }

  admin.initializeApp()

  try {
    // Sets certain custom claims to a user

    await admin.auth().setCustomUserClaims(uid, customClaims)
  } catch (e) {
    console.error(e)
    throw new functions.https.HttpsError('internal', e.message, e)
  }

  return { success: true }
})