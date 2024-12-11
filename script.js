
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-12-11 07:00:00", "b": 470.6}, {"a": "2024-12-11 07:05:00", "b": 474.3333333333333}, {"a": "2024-12-11 07:10:00", "b": 478.75}, {"a": "2024-12-11 07:15:00", "b": 472.0}, {"a": "2024-12-11 07:20:00", "b": 485.25}, {"a": "2024-12-11 07:25:00", "b": 482.0}, {"a": "2024-12-11 07:30:00", "b": 469.6}, {"a": "2024-12-11 07:35:00", "b": 476.4}, {"a": "2024-12-11 07:40:00", "b": 493.4}, {"a": "2024-12-11 07:45:00", "b": 492.2}, {"a": "2024-12-11 07:50:00", "b": 484.3333333333333}, {"a": "2024-12-11 07:55:00", "b": 471.0}, {"a": "2024-12-11 08:00:00", "b": 486.6}, {"a": "2024-12-11 08:05:00", "b": 489.6}, {"a": "2024-12-11 08:10:00", "b": 494.25}, {"a": "2024-12-11 08:15:00", "b": 499.4}, {"a": "2024-12-11 08:20:00", "b": 497.6}, {"a": "2024-12-11 08:25:00", "b": 496.6}, {"a": "2024-12-11 08:30:00", "b": 499.0}, {"a": "2024-12-11 08:35:00", "b": 497.0}, {"a": "2024-12-11 08:40:00", "b": 503.2}, {"a": "2024-12-11 08:45:00", "b": 494.75}, {"a": "2024-12-11 08:50:00", "b": 504.6}, {"a": "2024-12-11 08:55:00", "b": 534.8}, {"a": "2024-12-11 09:00:00", "b": 529.6}, {"a": "2024-12-11 09:05:00", "b": 538.4}, {"a": "2024-12-11 09:10:00", "b": 536.8}, {"a": "2024-12-11 09:15:00", "b": 527.6}, {"a": "2024-12-11 09:20:00", "b": 524.2}, {"a": "2024-12-11 09:25:00", "b": 526.8}, {"a": "2024-12-11 09:30:00", "b": 531.4}, {"a": "2024-12-11 09:35:00", "b": 524.0}, {"a": "2024-12-11 09:40:00", "b": 508.8}, {"a": "2024-12-11 09:45:00", "b": 519.4}, {"a": "2024-12-11 09:50:00", "b": 528.8}, {"a": "2024-12-11 09:55:00", "b": 519.0}, {"a": "2024-12-11 10:00:00", "b": 486.6}, {"a": "2024-12-11 10:05:00", "b": 485.75}, {"a": "2024-12-11 10:10:00", "b": 482.5}, {"a": "2024-12-11 10:15:00", "b": 489.2}, {"a": "2024-12-11 10:20:00", "b": 497.2}, {"a": "2024-12-11 10:25:00", "b": 494.8}, {"a": "2024-12-11 10:30:00", "b": 497.5}, {"a": "2024-12-11 10:35:00", "b": 503.8}, {"a": "2024-12-11 10:40:00", "b": 493.5}, {"a": "2024-12-11 10:45:00", "b": 485.6}, {"a": "2024-12-11 10:50:00", "b": 476.6}, {"a": "2024-12-11 10:55:00", "b": 458.2}, {"a": "2024-12-11 11:00:00", "b": 474.25}, {"a": "2024-12-11 11:05:00", "b": 468.4}, {"a": "2024-12-11 11:10:00", "b": 463.8}, {"a": "2024-12-11 11:15:00", "b": 475.2}, {"a": "2024-12-11 11:20:00", "b": 460.4}, {"a": "2024-12-11 11:25:00", "b": 452.75}, {"a": "2024-12-11 11:30:00", "b": 440.2}, {"a": "2024-12-11 11:35:00", "b": 457.0}, {"a": "2024-12-11 11:40:00", "b": 453.2}, {"a": "2024-12-11 11:45:00", "b": 449.0}, {"a": "2024-12-11 11:50:00", "b": 437.4}, {"a": "2024-12-11 11:55:00", "b": 441.75}, {"a": "2024-12-11 12:00:00", "b": 432.25}, {"a": "2024-12-11 12:05:00", "b": 439.25}, {"a": "2024-12-11 12:10:00", "b": 443.8}, {"a": "2024-12-11 12:15:00", "b": 448.4}, {"a": "2024-12-11 12:20:00", "b": 433.2}, {"a": "2024-12-11 12:25:00", "b": 426.8}, {"a": "2024-12-11 12:30:00", "b": 420.8}, {"a": "2024-12-11 12:35:00", "b": 416.25}, {"a": "2024-12-11 12:40:00", "b": 418.8}, {"a": "2024-12-11 12:45:00", "b": 419.75}, {"a": "2024-12-11 12:50:00", "b": 418.6}, {"a": "2024-12-11 12:55:00", "b": 410.75}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    