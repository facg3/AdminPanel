+----------------------+------------+--------------+-----------------+---------------+---------------+----------------+-----------------+-------------------------------------------------------------------------+------------------+
| rolname              | rolsuper   | rolinherit   | rolcreaterole   | rolcreatedb   | rolcanlogin   | rolconnlimit   | rolvaliduntil   | memberof                                                                | rolreplication   |
|----------------------+------------+--------------+-----------------+---------------+---------------+----------------+-----------------+-------------------------------------------------------------------------+------------------|
| crow                 | False      | True         | False           | False         | True          | -1             | <null>          | []                                                                      | False            |
| pg_monitor           | False      | True         | False           | False         | False         | -1             | <null>          | [u'pg_read_all_settings', u'pg_read_all_stats', u'pg_stat_scan_tables'] | False            |
| pg_read_all_settings | False      | True         | False           | False         | False         | -1             | <null>          | []                                                                      | False            |
| pg_read_all_stats    | False      | True         | False           | False         | False         | -1             | <null>          | []                                                                      | False            |
| pg_signal_backend    | False      | True         | False           | False         | False         | -1             | <null>          | []                                                                      | False            |
| pg_stat_scan_tables  | False      | True         | False           | False         | False         | -1             | <null>          | []                                                                      | False            |
| postgres             | True       | True         | True            | True          | True          | -1             | <null>          | []                                                                      | True             |
+----------------------+------------+--------------+-----------------+---------------+---------------+----------------+-----------------+-------------------------------------------------------------------------+------------------+
SELECT 7