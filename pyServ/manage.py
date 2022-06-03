import urllib.parse
from sqlalchemy import create_engine
import psycopg2

urllib.parse.quote_plus("test")
engine = create_engine('postgresql+psycopg2://postgres:test\
@hostname/database_name')

# declare the connection string specifying
# the host name database name use name
# and password
conn_string = "host='host_name' dbname='database_name'\
user='user_name' password='your_password'"

# use connect function to establish the connection
conn = psycopg2.connect(conn_string)
