import logging

logger = logging.getLogger(__name__)

# Cloud MongoDB Atlas sync configuration for AIDCEVVPP
MONGO_URI = "mongodb+srv://aidcevvpp_user:aidcevvpp_secret@cluster0.mongodb.net/aidcevvpp_db?retryWrites=true&w=majority"
MONGO_DB_NAME = "aidcevvpp_db"

def sync_to_mongo(collection_name, data_dict):
    """
    Syncs local SQLite records to Cloud MongoDB Atlas asynchronously/gracefully.
    Falls back silently if offline or URI unreachable.
    """
    try:
        from pymongo import MongoClient
        client = MongoClient(MONGO_URI, serverSelectionTimeoutMS=1500)
        db = client[MONGO_DB_NAME]
        col = db[collection_name]
        res = col.insert_one(data_dict.copy())
        client.close()
        return str(res.inserted_id)
    except Exception as e:
        logger.info(f"MongoDB Cloud sync fallback (offline/local mode): {e}")
        return None
