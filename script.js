
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-24 09:00:00", "b": 435.4}, {"a": "2024-11-24 09:05:00", "b": 439.0}, {"a": "2024-11-24 09:10:00", "b": 424.0}, {"a": "2024-11-24 09:15:00", "b": 439.6}, {"a": "2024-11-24 09:20:00", "b": 473.5}, {"a": "2024-11-24 09:25:00", "b": 468.0}, {"a": "2024-11-24 09:30:00", "b": 448.6}, {"a": "2024-11-24 09:35:00", "b": 449.6}, {"a": "2024-11-24 09:40:00", "b": 477.4}, {"a": "2024-11-24 09:45:00", "b": 468.6}, {"a": "2024-11-24 09:50:00", "b": 455.8}, {"a": "2024-11-24 09:55:00", "b": 473.2}, {"a": "2024-11-24 10:00:00", "b": 449.0}, {"a": "2024-11-24 10:05:00", "b": 442.4}, {"a": "2024-11-24 10:10:00", "b": 467.6}, {"a": "2024-11-24 10:15:00", "b": 451.8}, {"a": "2024-11-24 10:20:00", "b": 475.2}, {"a": "2024-11-24 10:25:00", "b": 471.2}, {"a": "2024-11-24 10:30:00", "b": 455.2}, {"a": "2024-11-24 10:35:00", "b": 455.0}, {"a": "2024-11-24 10:40:00", "b": 456.0}, {"a": "2024-11-24 10:45:00", "b": 458.0}, {"a": "2024-11-24 10:50:00", "b": 427.8}, {"a": "2024-11-24 10:55:00", "b": 420.0}, {"a": "2024-11-24 11:00:00", "b": 424.0}, {"a": "2024-11-24 11:05:00", "b": 410.8}, {"a": "2024-11-24 11:10:00", "b": 410.3333333333333}, {"a": "2024-11-24 11:15:00", "b": 412.5}, {"a": "2024-11-24 11:20:00", "b": 408.3333333333333}, {"a": "2024-11-24 11:25:00", "b": 407.0}, {"a": "2024-11-24 11:30:00", "b": 405.0}, {"a": "2024-11-24 11:35:00", "b": 406.0}, {"a": "2024-11-24 11:40:00", "b": 408.5}, {"a": "2024-11-24 11:45:00", "b": 407.0}, {"a": "2024-11-24 11:50:00", "b": 410.0}, {"a": "2024-11-24 11:55:00", "b": 405.6}, {"a": "2024-11-24 12:00:00", "b": 403.5}, {"a": "2024-11-24 12:05:00", "b": 405.5}, {"a": "2024-11-24 12:10:00", "b": 406.6}, {"a": "2024-11-24 12:15:00", "b": 405.0}, {"a": "2024-11-24 12:20:00", "b": 406.0}, {"a": "2024-11-24 12:25:00", "b": 407.0}, {"a": "2024-11-24 12:30:00", "b": 406.25}, {"a": "2024-11-24 12:35:00", "b": 404.0}, {"a": "2024-11-24 12:40:00", "b": 411.8}, {"a": "2024-11-24 12:45:00", "b": 407.25}, {"a": "2024-11-24 12:50:00", "b": 406.6666666666667}, {"a": "2024-11-24 12:55:00", "b": 406.0}, {"a": "2024-11-24 13:00:00", "b": 405.0}, {"a": "2024-11-24 13:05:00", "b": 402.5}, {"a": "2024-11-24 13:10:00", "b": 403.0}, {"a": "2024-11-24 13:15:00", "b": 401.6666666666667}, {"a": "2024-11-24 13:20:00", "b": 401.4}, {"a": "2024-11-24 13:25:00", "b": 402.0}, {"a": "2024-11-24 13:30:00", "b": 402.2}, {"a": "2024-11-24 13:35:00", "b": 402.5}, {"a": "2024-11-24 13:40:00", "b": 401.4}, {"a": "2024-11-24 13:45:00", "b": 401.75}, {"a": "2024-11-24 13:50:00", "b": 402.4}, {"a": "2024-11-24 13:55:00", "b": 402.5}, {"a": "2024-11-24 14:00:00", "b": 400.75}, {"a": "2024-11-24 14:05:00", "b": 401.8}, {"a": "2024-11-24 14:10:00", "b": 401.5}, {"a": "2024-11-24 14:15:00", "b": 401.2}, {"a": "2024-11-24 14:20:00", "b": 403.5}, {"a": "2024-11-24 14:25:00", "b": 401.0}, {"a": "2024-11-24 14:30:00", "b": 401.3333333333333}, {"a": "2024-11-24 14:35:00", "b": 401.4}, {"a": "2024-11-24 14:40:00", "b": 401.0}, {"a": "2024-11-24 14:45:00", "b": 402.8}, {"a": "2024-11-24 14:50:00", "b": 402.2}, {"a": "2024-11-24 14:55:00", "b": 401.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    