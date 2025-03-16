
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-16 08:00:00", "b": 473.0}, {"a": "2025-03-16 08:05:00", "b": 477.75}, {"a": "2025-03-16 08:10:00", "b": 478.25}, {"a": "2025-03-16 08:15:00", "b": 487.2}, {"a": "2025-03-16 08:20:00", "b": 496.0}, {"a": "2025-03-16 08:25:00", "b": 495.5}, {"a": "2025-03-16 08:30:00", "b": 493.4}, {"a": "2025-03-16 08:35:00", "b": 491.8}, {"a": "2025-03-16 08:40:00", "b": 509.2}, {"a": "2025-03-16 08:45:00", "b": 532.2}, {"a": "2025-03-16 08:50:00", "b": 545.75}, {"a": "2025-03-16 08:55:00", "b": 546.5}, {"a": "2025-03-16 09:00:00", "b": 535.2}, {"a": "2025-03-16 09:05:00", "b": 522.6}, {"a": "2025-03-16 09:10:00", "b": 536.8}, {"a": "2025-03-16 09:15:00", "b": 540.6}, {"a": "2025-03-16 09:20:00", "b": 526.75}, {"a": "2025-03-16 09:25:00", "b": 512.75}, {"a": "2025-03-16 09:30:00", "b": 508.0}, {"a": "2025-03-16 09:35:00", "b": 505.75}, {"a": "2025-03-16 09:40:00", "b": 526.0}, {"a": "2025-03-16 09:45:00", "b": 535.8}, {"a": "2025-03-16 09:50:00", "b": 543.6666666666666}, {"a": "2025-03-16 09:55:00", "b": 551.75}, {"a": "2025-03-16 10:00:00", "b": 556.4}, {"a": "2025-03-16 10:05:00", "b": 578.2}, {"a": "2025-03-16 10:10:00", "b": 578.4}, {"a": "2025-03-16 10:15:00", "b": 585.2}, {"a": "2025-03-16 10:20:00", "b": 594.75}, {"a": "2025-03-16 10:25:00", "b": 598.0}, {"a": "2025-03-16 10:30:00", "b": 611.5}, {"a": "2025-03-16 10:35:00", "b": 616.4}, {"a": "2025-03-16 10:40:00", "b": 597.4}, {"a": "2025-03-16 10:45:00", "b": 589.2}, {"a": "2025-03-16 10:50:00", "b": 598.5}, {"a": "2025-03-16 10:55:00", "b": 577.0}, {"a": "2025-03-16 11:00:00", "b": 564.4}, {"a": "2025-03-16 11:05:00", "b": 555.6}, {"a": "2025-03-16 11:10:00", "b": 564.4}, {"a": "2025-03-16 11:15:00", "b": 541.8}, {"a": "2025-03-16 11:20:00", "b": 532.6}, {"a": "2025-03-16 11:25:00", "b": 541.0}, {"a": "2025-03-16 11:30:00", "b": 535.3333333333334}, {"a": "2025-03-16 11:35:00", "b": 530.0}, {"a": "2025-03-16 11:40:00", "b": 521.2}, {"a": "2025-03-16 11:45:00", "b": 508.6}, {"a": "2025-03-16 11:50:00", "b": 506.0}, {"a": "2025-03-16 11:55:00", "b": 485.2}, {"a": "2025-03-16 12:00:00", "b": 495.5}, {"a": "2025-03-16 12:05:00", "b": 496.0}, {"a": "2025-03-16 12:10:00", "b": 494.0}, {"a": "2025-03-16 12:15:00", "b": 489.4}, {"a": "2025-03-16 12:20:00", "b": 495.3333333333333}, {"a": "2025-03-16 12:25:00", "b": 485.0}, {"a": "2025-03-16 12:30:00", "b": 467.6}, {"a": "2025-03-16 12:35:00", "b": 461.2}, {"a": "2025-03-16 12:40:00", "b": 448.8}, {"a": "2025-03-16 12:45:00", "b": 486.2}, {"a": "2025-03-16 12:50:00", "b": 483.0}, {"a": "2025-03-16 12:55:00", "b": 463.3333333333333}, {"a": "2025-03-16 13:00:00", "b": 466.25}, {"a": "2025-03-16 13:05:00", "b": 458.5}, {"a": "2025-03-16 13:10:00", "b": 461.25}, {"a": "2025-03-16 13:15:00", "b": 461.6666666666667}, {"a": "2025-03-16 13:20:00", "b": 474.0}, {"a": "2025-03-16 13:25:00", "b": 455.0}, {"a": "2025-03-16 13:30:00", "b": 442.4}, {"a": "2025-03-16 13:35:00", "b": 455.75}, {"a": "2025-03-16 13:40:00", "b": 445.0}, {"a": "2025-03-16 13:45:00", "b": 438.2}, {"a": "2025-03-16 13:50:00", "b": 436.25}, {"a": "2025-03-16 13:55:00", "b": 445.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    