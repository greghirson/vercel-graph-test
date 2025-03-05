
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-05 03:00:00", "b": 452.2}, {"a": "2025-03-05 03:05:00", "b": 456.0}, {"a": "2025-03-05 03:10:00", "b": 457.25}, {"a": "2025-03-05 03:15:00", "b": 456.4}, {"a": "2025-03-05 03:20:00", "b": 460.75}, {"a": "2025-03-05 03:25:00", "b": 459.4}, {"a": "2025-03-05 03:30:00", "b": 462.75}, {"a": "2025-03-05 03:35:00", "b": 466.0}, {"a": "2025-03-05 03:40:00", "b": 462.2}, {"a": "2025-03-05 03:45:00", "b": 462.2}, {"a": "2025-03-05 03:50:00", "b": 464.8}, {"a": "2025-03-05 03:55:00", "b": 456.75}, {"a": "2025-03-05 04:00:00", "b": 450.4}, {"a": "2025-03-05 04:05:00", "b": 448.75}, {"a": "2025-03-05 04:10:00", "b": 450.5}, {"a": "2025-03-05 04:15:00", "b": 444.4}, {"a": "2025-03-05 04:20:00", "b": 448.0}, {"a": "2025-03-05 04:25:00", "b": 447.5}, {"a": "2025-03-05 04:30:00", "b": 454.25}, {"a": "2025-03-05 04:35:00", "b": 451.25}, {"a": "2025-03-05 04:40:00", "b": 453.2}, {"a": "2025-03-05 04:45:00", "b": 452.4}, {"a": "2025-03-05 04:50:00", "b": 448.2}, {"a": "2025-03-05 04:55:00", "b": 450.8}, {"a": "2025-03-05 05:00:00", "b": 461.5}, {"a": "2025-03-05 05:05:00", "b": 457.75}, {"a": "2025-03-05 05:10:00", "b": 454.25}, {"a": "2025-03-05 05:15:00", "b": 453.8}, {"a": "2025-03-05 05:20:00", "b": 457.0}, {"a": "2025-03-05 05:25:00", "b": 453.0}, {"a": "2025-03-05 05:30:00", "b": 448.0}, {"a": "2025-03-05 05:35:00", "b": 453.2}, {"a": "2025-03-05 05:40:00", "b": 456.4}, {"a": "2025-03-05 05:45:00", "b": 458.4}, {"a": "2025-03-05 05:50:00", "b": 448.8}, {"a": "2025-03-05 05:55:00", "b": 450.4}, {"a": "2025-03-05 06:00:00", "b": 460.0}, {"a": "2025-03-05 06:05:00", "b": 452.25}, {"a": "2025-03-05 06:10:00", "b": 453.2}, {"a": "2025-03-05 06:15:00", "b": 471.8}, {"a": "2025-03-05 06:20:00", "b": 473.0}, {"a": "2025-03-05 06:25:00", "b": 491.4}, {"a": "2025-03-05 06:30:00", "b": 494.4}, {"a": "2025-03-05 06:35:00", "b": 486.2}, {"a": "2025-03-05 06:40:00", "b": 488.25}, {"a": "2025-03-05 06:45:00", "b": 483.4}, {"a": "2025-03-05 06:50:00", "b": 489.6}, {"a": "2025-03-05 06:55:00", "b": 510.2}, {"a": "2025-03-05 07:00:00", "b": 528.6}, {"a": "2025-03-05 07:05:00", "b": 542.8}, {"a": "2025-03-05 07:10:00", "b": 548.8}, {"a": "2025-03-05 07:15:00", "b": 551.2}, {"a": "2025-03-05 07:20:00", "b": 538.2}, {"a": "2025-03-05 07:25:00", "b": 532.0}, {"a": "2025-03-05 07:30:00", "b": 531.0}, {"a": "2025-03-05 07:35:00", "b": 533.0}, {"a": "2025-03-05 07:40:00", "b": 537.5}, {"a": "2025-03-05 07:45:00", "b": 540.25}, {"a": "2025-03-05 07:50:00", "b": 569.75}, {"a": "2025-03-05 07:55:00", "b": 590.6}, {"a": "2025-03-05 08:00:00", "b": 575.8}, {"a": "2025-03-05 08:05:00", "b": 568.6}, {"a": "2025-03-05 08:10:00", "b": 572.0}, {"a": "2025-03-05 08:15:00", "b": 566.0}, {"a": "2025-03-05 08:20:00", "b": 572.4}, {"a": "2025-03-05 08:25:00", "b": 568.2}, {"a": "2025-03-05 08:30:00", "b": 570.75}, {"a": "2025-03-05 08:35:00", "b": 572.0}, {"a": "2025-03-05 08:40:00", "b": 572.0}, {"a": "2025-03-05 08:45:00", "b": 562.0}, {"a": "2025-03-05 08:50:00", "b": 556.6}, {"a": "2025-03-05 08:55:00", "b": 551.2}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    