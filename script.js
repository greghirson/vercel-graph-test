
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-24 06:00:00", "b": 402.8}, {"a": "2024-11-24 06:05:00", "b": 401.5}, {"a": "2024-11-24 06:10:00", "b": 402.5}, {"a": "2024-11-24 06:15:00", "b": 402.6}, {"a": "2024-11-24 06:20:00", "b": 402.25}, {"a": "2024-11-24 06:25:00", "b": 401.5}, {"a": "2024-11-24 06:30:00", "b": 402.0}, {"a": "2024-11-24 06:35:00", "b": 403.0}, {"a": "2024-11-24 06:40:00", "b": 401.4}, {"a": "2024-11-24 06:45:00", "b": 402.0}, {"a": "2024-11-24 06:50:00", "b": 401.5}, {"a": "2024-11-24 06:55:00", "b": 403.0}, {"a": "2024-11-24 07:00:00", "b": 405.5}, {"a": "2024-11-24 07:05:00", "b": 404.0}, {"a": "2024-11-24 07:10:00", "b": 403.4}, {"a": "2024-11-24 07:15:00", "b": 401.0}, {"a": "2024-11-24 07:20:00", "b": 404.3333333333333}, {"a": "2024-11-24 07:25:00", "b": 402.75}, {"a": "2024-11-24 07:30:00", "b": 402.0}, {"a": "2024-11-24 07:35:00", "b": 402.0}, {"a": "2024-11-24 07:40:00", "b": 403.0}, {"a": "2024-11-24 07:45:00", "b": 414.6666666666667}, {"a": "2024-11-24 07:50:00", "b": 448.0}, {"a": "2024-11-24 07:55:00", "b": 437.2}, {"a": "2024-11-24 08:00:00", "b": 423.4}, {"a": "2024-11-24 08:05:00", "b": 425.5}, {"a": "2024-11-24 08:10:00", "b": 429.0}, {"a": "2024-11-24 08:15:00", "b": 413.25}, {"a": "2024-11-24 08:20:00", "b": 414.8}, {"a": "2024-11-24 08:25:00", "b": 416.75}, {"a": "2024-11-24 08:30:00", "b": 408.0}, {"a": "2024-11-24 08:35:00", "b": 422.2}, {"a": "2024-11-24 08:40:00", "b": 428.4}, {"a": "2024-11-24 08:45:00", "b": 427.75}, {"a": "2024-11-24 08:50:00", "b": 422.0}, {"a": "2024-11-24 08:55:00", "b": 439.6}, {"a": "2024-11-24 09:00:00", "b": 435.4}, {"a": "2024-11-24 09:05:00", "b": 439.0}, {"a": "2024-11-24 09:10:00", "b": 424.0}, {"a": "2024-11-24 09:15:00", "b": 439.6}, {"a": "2024-11-24 09:20:00", "b": 473.5}, {"a": "2024-11-24 09:25:00", "b": 468.0}, {"a": "2024-11-24 09:30:00", "b": 448.6}, {"a": "2024-11-24 09:35:00", "b": 449.6}, {"a": "2024-11-24 09:40:00", "b": 477.4}, {"a": "2024-11-24 09:45:00", "b": 468.6}, {"a": "2024-11-24 09:50:00", "b": 455.8}, {"a": "2024-11-24 09:55:00", "b": 473.2}, {"a": "2024-11-24 10:00:00", "b": 449.0}, {"a": "2024-11-24 10:05:00", "b": 442.4}, {"a": "2024-11-24 10:10:00", "b": 467.6}, {"a": "2024-11-24 10:15:00", "b": 451.8}, {"a": "2024-11-24 10:20:00", "b": 475.2}, {"a": "2024-11-24 10:25:00", "b": 471.2}, {"a": "2024-11-24 10:30:00", "b": 455.2}, {"a": "2024-11-24 10:35:00", "b": 455.0}, {"a": "2024-11-24 10:40:00", "b": 456.0}, {"a": "2024-11-24 10:45:00", "b": 458.0}, {"a": "2024-11-24 10:50:00", "b": 427.8}, {"a": "2024-11-24 10:55:00", "b": 420.0}, {"a": "2024-11-24 11:00:00", "b": 424.0}, {"a": "2024-11-24 11:05:00", "b": 410.8}, {"a": "2024-11-24 11:10:00", "b": 410.3333333333333}, {"a": "2024-11-24 11:15:00", "b": 412.5}, {"a": "2024-11-24 11:20:00", "b": 408.3333333333333}, {"a": "2024-11-24 11:25:00", "b": 407.0}, {"a": "2024-11-24 11:30:00", "b": 405.0}, {"a": "2024-11-24 11:35:00", "b": 406.0}, {"a": "2024-11-24 11:40:00", "b": 408.5}, {"a": "2024-11-24 11:45:00", "b": 407.0}, {"a": "2024-11-24 11:50:00", "b": 410.0}, {"a": "2024-11-24 11:55:00", "b": 405.6}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    